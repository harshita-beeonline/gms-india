import MainProductDynamic from "../../../components/MainCategoryProduct/MainProductDynamic";

const MainProductSlugPage = ({ params }) => {
  const { slug } = params;
  return <MainProductDynamic slug={slug} />;
};

export default MainProductSlugPage;
