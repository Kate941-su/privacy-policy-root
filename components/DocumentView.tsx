import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  availableLangs,
  documentPath,
  getDocument,
  listSlugs,
  type Kind,
  type Lang,
} from "@/lib/documents";

const LABELS: Record<Lang, { updated: string; name: string }> = {
  ja: { updated: "最終更新日", name: "日本語" },
  en: { updated: "Last updated", name: "English" },
};

export type DocumentParams = { params: Promise<{ app: string }> };

// 各ルートの page.tsx から使う generateStaticParams / generateMetadata / Page をまとめて生成する
export function documentRoute(kind: Kind, lang: Lang) {
  return {
    async generateStaticParams() {
      return (await listSlugs(kind, lang)).map((app) => ({ app }));
    },
    async generateMetadata({ params }: DocumentParams): Promise<Metadata> {
      const doc = await getDocument((await params).app, kind, lang);
      return { title: doc?.title };
    },
    async Page({ params }: DocumentParams) {
      return <DocumentView slug={(await params).app} kind={kind} lang={lang} />;
    },
  };
}

async function DocumentView({ slug, kind, lang }: { slug: string; kind: Kind; lang: Lang }) {
  const doc = await getDocument(slug, kind, lang);
  if (!doc) notFound();
  const others = (await availableLangs(slug, kind)).filter((l) => l !== lang);
  return (
    <article lang={lang}>
      {others.length > 0 && (
        <nav className="lang-switch">
          {others.map((l) => (
            <Link key={l} href={documentPath(slug, kind, l)} lang={l}>
              {LABELS[l].name}
            </Link>
          ))}
        </nav>
      )}
      {doc.updatedAt && (
        <p className="updated">
          {LABELS[lang].updated}: {doc.updatedAt}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: doc.html }} />
    </article>
  );
}
