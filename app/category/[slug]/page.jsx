import ProductCategoryPage from "../../../components/ProductCategories/ProductCategoryPage";

const CategorySlugPage = ({ params }) => {
  const { slug } = params;
  return <ProductCategoryPage slug={slug} />;
};

export default CategorySlugPage;
