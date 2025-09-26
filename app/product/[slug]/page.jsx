import ProductPage from "../../../components/pages/ProductPage";

const ProductSlugPage = ({ params }) => {
  const { slug } = params;
  return <ProductPage slug={slug} />;
};

export default ProductSlugPage;
