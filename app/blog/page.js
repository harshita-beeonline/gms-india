import React from "react";
import MainBlog from "../../components/BlogPage/MainBlog";
import BlogCards from "../../components/BlogPage/BlogCards";
import { backendClient } from "../../lib/graphql-clients";
import { getBlogs } from "../../components/graphql";

export const revalidate = 3600;

const BlogPage = async () => {
  let data = null;
  try {
    data = await backendClient.request(getBlogs, { page: 1 });
  } catch (error) {
    console.error("[blog] failed to fetch blogs:", error?.message);
  }

  const articles =
    data?.blog_article?.filter((article) => article?.active === true) || [];

  return (
    <>
      <MainBlog />
      <BlogCards articles={articles} />
    </>
  );
};

export default BlogPage;
