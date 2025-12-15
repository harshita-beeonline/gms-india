import IndividualBlog from "../../../components/BlogPage/IndividualBlog";
import { backendClient } from "../../../lib/graphql-clients";
import { getAllSlugs, getArticle } from "../../../components/graphql";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const data = await backendClient.request(getAllSlugs);
    const slugs = data?.blog_article || [];
    return slugs.filter((item) => item?.active === true).map((item) => ({
      slug: item.slug,
    }));
  } catch (error) {
    console.error("[blog] failed to prefetch slugs:", error?.message);
    return [];
  }
}

const BlogArticlePage = async ({ params }) => {
  const { slug } = params;
  let data = null;

  try {
    data = await backendClient.request(getArticle, { slug });
  } catch (error) {
    console.error(
      `[blog] failed to fetch article for slug ${slug}:`,
      error?.message
    );
  }

  const article = data?.blog_article?.[0] || null;

  if (!article || article?.active !== true) {
    notFound();
  }

  return <IndividualBlog article={article} />;
};

export default BlogArticlePage;
