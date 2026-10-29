import { documentRoute } from "@/components/DocumentView";

const route = documentRoute("terms", "en");

// terms/en/ にある .md 以外のパスは 404
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
