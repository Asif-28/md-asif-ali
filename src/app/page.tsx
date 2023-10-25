import {
  BlogList,
  Hero,
  MarketingArticle,
  RelatedBlog,
} from "@/components/sections";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogList />
      <RelatedBlog />
      <MarketingArticle />
    </main>
  );
}
