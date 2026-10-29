import type { Metadata } from "next";
import { PolicyView } from "@/components/PolicyView";
import { getPolicy, listSlugs } from "@/lib/policies";

type Props = { params: Promise<{ app: string }> };

// policies/en/ にある .md 以外のパスは 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await listSlugs("en")).map((app) => ({ app }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const policy = await getPolicy((await params).app, "en");
  return { title: policy?.title };
}

export default async function EnglishPolicyPage({ params }: Props) {
  return <PolicyView slug={(await params).app} lang="en" />;
}
