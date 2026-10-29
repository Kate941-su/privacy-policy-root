import Link from "next/link";
import { LANGS, listPolicies, policyPath } from "@/lib/policies";

const HEADINGS = { ja: "日本語", en: "English" } as const;

export default async function Home() {
  const groups = await Promise.all(
    LANGS.map(async (lang) => ({ lang, policies: await listPolicies(lang) })),
  );
  return (
    <>
      <h1>Privacy Policies</h1>
      {groups
        .filter((g) => g.policies.length > 0)
        .map(({ lang, policies }) => (
          <section key={lang} lang={lang}>
            <h2>{HEADINGS[lang]}</h2>
            <ul className="policy-list">
              {policies.map((p) => (
                <li key={p.slug}>
                  <Link href={policyPath(p.slug, lang)}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
