import Link from "next/link";
import { notFound } from "next/navigation";
import { availableLangs, getPolicy, policyPath, type Lang } from "@/lib/policies";

const LABELS: Record<Lang, { updated: string; name: string }> = {
  ja: { updated: "最終更新日", name: "日本語" },
  en: { updated: "Last updated", name: "English" },
};

export async function PolicyView({ slug, lang }: { slug: string; lang: Lang }) {
  const policy = await getPolicy(slug, lang);
  if (!policy) notFound();
  const others = (await availableLangs(slug)).filter((l) => l !== lang);
  return (
    <article lang={lang}>
      {others.length > 0 && (
        <nav className="lang-switch">
          {others.map((l) => (
            <Link key={l} href={policyPath(slug, l)} lang={l}>
              {LABELS[l].name}
            </Link>
          ))}
        </nav>
      )}
      {policy.updatedAt && (
        <p className="updated">
          {LABELS[lang].updated}: {policy.updatedAt}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: policy.html }} />
    </article>
  );
}
