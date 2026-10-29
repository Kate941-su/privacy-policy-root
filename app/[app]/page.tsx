import type { Metadata } from "next";
import { PolicyView } from "@/components/PolicyView";
import { getPolicy, listSlugs } from "@/lib/policies";

type Props = { params: Promise<{ app: string }> };

// policies/ にある .md 以外のパスは 404
export const dynamicParams = false;

export async function generateStaticParams() {
  // 英語版のみのアプリでも /{app}/en を生成できるよう両言語の slug を含める
  const slugs = new Set([...(await listSlugs("ja")), ...(await listSlugs("en"))]);
  return [...slugs].map((app) => ({ app }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const policy = await getPolicy((await params).app, "ja");
  return { title: policy?.title };
}

export default async function PolicyPage({ params }: Props) {
  return <PolicyView slug={(await params).app} lang="ja" />;
}
