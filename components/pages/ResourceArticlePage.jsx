import Link from "next/link";
import OGP from "../OGP";
import { getAsset } from "../utils";

const ResourceArticlePage = ({ article }) => {
  return (
    <div>
      <div
        className="lg:py-20 lg:px-72 p-8 border-b-4 border-gray-300"
        style={{
          backgroundImage: `url(${getAsset(
            "64697ef0-8988-4082-b881-00d763173549"
          )})`,
        }}
      >
        <Link href="/resources/" className="block mb-4">
          Resources
        </Link>
        <h1 className="text-4xl lg:text-6xl font-chianti">{article.title}</h1>
      </div>
      <OGP title={article.title} image={article.image} />
      <div className="prose px-auto lg:container mx-auto lg:px-32 px-10 mt-6">
        <div dangerouslySetInnerHTML={{ __html: article.overview }} />
      </div>
    </div>
  );
};

export default ResourceArticlePage;
