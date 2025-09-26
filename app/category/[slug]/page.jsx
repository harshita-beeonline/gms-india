import CategoryPage from "../../../components/pages/CategoryPage";

const CategorySlugPage = ({ params }) => {
  const { slug } = params;
  return <CategoryPage slug={slug} />;
};

export default CategorySlugPage;
