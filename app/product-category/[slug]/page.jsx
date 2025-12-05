import ProductCategoryPage from "../../../components/ProductCategories/ProductCategoryPage";

const ProductCategorySlugPage = ({ params }) => {
  const { slug } = params;
  return <ProductCategoryPage slug={slug} />;
};

export default ProductCategorySlugPage;
