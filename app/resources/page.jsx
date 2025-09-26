import Link from "next/link";
import OGP from "../../components/OGP";
import { getAsset } from "../../components/utils";
import { backendClient } from "../../lib/graphql-clients";
import { getBlogs } from "../../components/graphql";

export const revalidate = 3600;

const ResourcesPage = async ({ searchParams }) => {
  const pageParam = searchParams?.page || "1";
  const page = Number.isNaN(Number(pageParam)) ? 1 : parseInt(pageParam, 10);
  const data = await backendClient.request(getBlogs, { page });
  const articles = data?.blog_article || [];

  return (
    <div>
      <OGP
        title="Resources"
        image={getAsset("28da2ee3-ec92-420a-b24d-a07675fc4ecd", 70, 100)}
      />
      <div className="w-full relative" style={{ height: "50vh" }}>
        <div
          className="block absolute w-full -z-30 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url('${getAsset(
              "28da2ee3-ec92-420a-b24d-a07675fc4ecd"
            )}')`,
            height: "50vh",
          }}
        />
        <div className="lg:w-1/2 lg:p-24 p-6 flex flex-col gap-y-3">
          <p className="block text-xl text-yellow-400">RESOURCES</p>
          <h1 className="lg:text-5xl text-4xl text-gray-200 font-chianti block">
            Read the latest blogs and updates from GMS
          </h1>
        </div>
      </div>

      <div className="lg:container mx-auto lg:px-20 mt-10 px-4">
        <div className="grid lg:grid-cols-4 justify-evenly gap-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/resources/${article.slug}`}
              className="flex flex-col gap-y-3 shadow-md rounded-md p-6"
            >
              <p className="text-xl font-chianti text-center">{article.title}</p>
              <p>{article.categories}</p>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <h2 className="text-4xl block text-center text-gray-700 w-full">
            No articles found
          </h2>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
