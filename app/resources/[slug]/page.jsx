import ResourceArticlePage from "../../../components/pages/ResourceArticlePage";
import { backendClient } from "../../../lib/graphql-clients";
import { getAllSlugs, getArticle } from "../../../components/graphql";

export const revalidate = 3600;

export async function generateStaticParams() {
  const data = await backendClient.request(getAllSlugs);
  const slugs = data?.blog_article || [];
  return slugs.map((item) => ({ slug: item.slug }));
}

const ResourceArticle = async ({ params }) => {
  const { slug } = params;
  const data = await backendClient.request(getArticle, { slug });
  const article = data?.blog_article?.[0] || null;

  if (!article) {
    return null;
  }

  return <ResourceArticlePage article={article} />;
};

export default ResourceArticle;
