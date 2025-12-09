import MainProductDynamic from "../../../components/MainCategoryProduct/MainProductDynamic";

const ProductSlugPage = ({ params }) => {
  const { slug } = params;
  return <MainProductDynamic slug={slug} />;
};

export default ProductSlugPage;
