import SearchPage from "../../components/pages/SearchPage";
import { backendClient } from "../../lib/graphql-clients";
import { SearchGQL } from "../../components/graphql";

export const dynamic = "force-dynamic";

const Search = async ({ searchParams }) => {
  const rawQuery = searchParams?.q || "";
  const query = decodeURIComponent(rawQuery);

  let products = [];
  if (query) {
    const data = await backendClient.request(SearchGQL, { q: query });
    products = data?.backend_product || [];
  }

  return <SearchPage initialQuery={query} products={products} />;
};

export default Search;
