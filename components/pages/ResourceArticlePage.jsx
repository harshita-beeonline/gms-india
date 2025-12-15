import IndividualBlog from "../BlogPage/IndividualBlog";
import OGP from "../OGP";
import { getAsset } from "../utils";

const ResourceArticlePage = ({ article }) => {
  if (!article) return null;

  const assetId = article?.cover_image?.id || article?.image;
  const ogImage = assetId ? getAsset(assetId, 70, 1200) : "";

  return (
    <>
      <OGP title={article.title || "Resources"} image={ogImage} />
      <IndividualBlog article={article} />
    </>
  );
};

export default ResourceArticlePage;
