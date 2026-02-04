import { NextResponse } from "next/server";
import { backendClient } from "../../../lib/graphql-clients";
import { getBlogs } from "../../../components/graphql";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get("page") || "1";
  const page = Number.isNaN(Number(pageParam)) ? 1 : parseInt(pageParam, 10);

  try {
    const data = await backendClient.request(getBlogs, { page });
    const articles =
      data?.blog_article?.filter((article) => article?.active === true) || [];
    return NextResponse.json({ articles });
  } catch (error) {
    console.error("[resources] failed to fetch blogs:", error?.message);
    return NextResponse.json({ articles: [] }, { status: 500 });
  }
}
