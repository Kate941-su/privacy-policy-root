import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const POLICIES_DIR = path.join(process.cwd(), "policies");

// URL に使えるファイル名のみ対象 (例: my-app.md → /my-app)
const SLUG_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;

// ja: policies/{slug}.md → /{slug}
// en: policies/en/{slug}.md → /{slug}/en
export const LANGS = ["ja", "en"] as const;
export type Lang = (typeof LANGS)[number];

export type PolicyMeta = {
  slug: string;
  lang: Lang;
  title: string;
  updatedAt?: string;
};

export type Policy = PolicyMeta & { html: string };

export function policyPath(slug: string, lang: Lang): string {
  return lang === "ja" ? `/${slug}` : `/${slug}/${lang}`;
}

function langDir(lang: Lang): string {
  return lang === "ja" ? POLICIES_DIR : path.join(POLICIES_DIR, lang);
}

export async function listSlugs(lang: Lang): Promise<string[]> {
  let files: string[];
  try {
    files = await fs.readdir(langDir(lang));
  } catch {
    return [];
  }
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -3))
    .filter((slug) => SLUG_PATTERN.test(slug))
    .sort();
}

export async function getPolicy(slug: string, lang: Lang): Promise<Policy | null> {
  if (!SLUG_PATTERN.test(slug)) return null;
  let raw: string;
  try {
    raw = await fs.readFile(path.join(langDir(lang), `${slug}.md`), "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  const html = String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(content),
  );
  return {
    slug,
    lang,
    // front matter の title > 本文の最初の h1 > ファイル名
    title: data.title ?? content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? slug,
    updatedAt: formatDate(data.updatedAt),
    html,
  };
}

// 他言語版が存在する言語の一覧 (言語切り替えリンク用)
export async function availableLangs(slug: string): Promise<Lang[]> {
  const results = await Promise.all(
    LANGS.map(async (lang) => ((await listSlugs(lang)).includes(slug) ? lang : null)),
  );
  return results.filter((l): l is Lang => l !== null);
}

export async function listPolicies(lang: Lang): Promise<PolicyMeta[]> {
  const slugs = await listSlugs(lang);
  const policies = await Promise.all(slugs.map((slug) => getPolicy(slug, lang)));
  return policies
    .filter((p): p is Policy => p !== null)
    .map(({ slug, lang, title, updatedAt }) => ({ slug, lang, title, updatedAt }));
}

function formatDate(value: unknown): string | undefined {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return undefined;
}
