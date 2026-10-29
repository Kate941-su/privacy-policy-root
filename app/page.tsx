import Link from "next/link";
import { KINDS, LANGS, documentPath, listDocuments, type Kind, type Lang } from "@/lib/documents";

const HEADINGS: Record<Kind, Record<Lang, string>> = {
  privacy: { ja: "プライバシーポリシー", en: "Privacy Policy" },
  terms: { ja: "利用規約", en: "Terms of Use" },
  support: { ja: "サポート", en: "Support" },
};

export default async function Home() {
  const groups = await Promise.all(
    KINDS.flatMap((kind) =>
      LANGS.map(async (lang) => ({ kind, lang, docs: await listDocuments(kind, lang) })),
    ),
  );
  return (
    <>
      <h1>Documents</h1>
      {groups
        .filter((g) => g.docs.length > 0)
        .map(({ kind, lang, docs }) => (
          <section key={`${kind}-${lang}`} lang={lang}>
            <h2>{HEADINGS[kind][lang]}</h2>
            <ul className="doc-list">
              {docs.map((d) => (
                <li key={d.slug}>
                  <Link href={documentPath(d.slug, kind, lang)}>{d.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
