import OGP from "../../components/OGP";
import MainBlog from "../../components/BlogPage/MainBlog";
import ResourcesInfinite from "../../components/BlogPage/ResourcesInfinite";
import { backendClient } from "../../lib/graphql-clients";
import { getBlogs } from "../../components/graphql";

export const revalidate = 3600;

const ResourcesPage = async ({ searchParams }) => {
  const pageParam = searchParams?.page || "1";
  const page = Number.isNaN(Number(pageParam)) ? 1 : parseInt(pageParam, 10);
  let data = null;

  try {
    data = await backendClient.request(getBlogs, { page });
  } catch (error) {
    console.error("[resources] failed to fetch blogs:", error?.message);
  }

  const articles =
    data?.blog_article?.filter((article) => article?.active === true) || [];

  return (
    <>
      <OGP title="Resources" />
      <MainBlog />
      <ResourcesInfinite initialArticles={articles} initialPage={page} />
    </>
  );
};

export default ResourcesPage;
