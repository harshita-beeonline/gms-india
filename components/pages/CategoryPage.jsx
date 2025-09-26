"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCategoryPageGQL } from "../graphql";
import OGP from "../OGP";
import ProductCard from "../ProductCard";
import CategoryTree from "../CategoryTree";
import MiniSearch from "../MiniSearch";
import ProductSkeleton from "../ProductSkeleton";
import { frontendClient } from "../../lib/graphql-clients";

const getSuperCategory = (slug) => {
  let restrictedSlug = [slug];

  switch (slug) {
    case "equipment":
      restrictedSlug = [
        "die-bonding",
        "laser-bonding",
        "sam-coating",
        "resistance-bonding",
        "spin-rinse-dryer",
        "permanent-wafer-bonding-epoxy",
        "manual",
        "automatic",
        "shear-tester",
        "laser-micromachining",
        "spray-coater",
        "temporary-bonding",
        "debonding",
        "scanning-acoustic-microscope",
        "lapping-grinding",
        "cmp",
        "4-point-probe-system",
        "resistance-welding",
        "spray-solvent-tool",
        "wafer-electroplating",
        "wet-chemical-processing",
        "dispensing-systems",
        "chemical-cabinets",
        "confocal-microscope",
        "laser-trimmers",
        "cleanroom-equipment",
      ];
      break;
    case "components":
      restrictedSlug = ["power-supplies"];
      break;
    case "materials":
      restrictedSlug = [
        "photomasks",
        "cleanroom-consumables",
        "needle-bonding-epoxy",
        "silicon-wafers",
        "lift-off-resists",
        "permanent-photopatternable-epoxy",
        "low-stress-dielectric-photoresist",
        "adhesion-promoter-for-su-8",
        "microspray-photoresists",
      ];
      break;
    default:
      break;
  }

  return {
    restrictedSlug,
  };
};

const CategoryPage = ({ slug }) => {
  const router = useRouter();
  const [treeOpen, setTreeOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();

  const fetchProducts = async (categorySlug) => {
    setLoading(true);
    setProducts(undefined);
    const { restrictedSlug } = getSuperCategory(categorySlug);
    const { backend_product, backend_category } = await frontendClient.request(
      getCategoryPageGQL,
      {
        slug: categorySlug,
        page: 1,
        slugs: restrictedSlug,
      }
    );
    if (!backend_category || backend_category.length === 0) {
      router.push("/404");
      return;
    }
    setCategory(backend_category[0]);
    setProducts(backend_product);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts(slug);
  }, [slug]);

  const toggleTreeOpen = () => setTreeOpen((t) => !t);

  return (
    <div className="flex lg:flex-row flex-col p-6">
      {category !== undefined && (
        <OGP title={category.name + " | Category"} image="" />
      )}
      <div className="lg:w-1/3 px-2">
        <MiniSearch />
        <button
          onClick={toggleTreeOpen}
          className="block lg:hidden px-4 py-2 mx-auto w-full my-2 shadow-sm border border-gms rounded-md text-gray-600"
        >
          {treeOpen ? "Close Categories" : "Show Categories"}
        </button>
        <div className={`${treeOpen ? "block" : "hidden"} lg:block`}>
          <CategoryTree />
        </div>
      </div>
      <div className="w-full p-4">
        <div className="lg:flex lg:justify-between border-b-2 border-gray-400">
          {category !== undefined && (
            <div className="px-4">
              {category.cat_rel_key && (
                <p className="text-gray-700">{category.cat_rel_key.name}</p>
              )}
              <h1 className="text-4xl text-gms block text-center lg:text-left">
                {category.name}
              </h1>
              <p className="lg:w-2/3 my-1 block">{category.description}</p>
            </div>
          )}

          {category === undefined && (
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-8 bg-indigo-300 rounded-full w-60 mb-4"></div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {products &&
            products.map((p, k) => (
              <ProductCard key={k} className="col-span-1" {...p} />
            ))}
          {(loading || products === undefined) &&
            [0, 1, 2].map((x) => <ProductSkeleton key={x} />)}
        </div>

        {products !== undefined && products.length === 0 && (
          <p className="block text-2xl text-center w-full mt-3 text-gray-600 ">
            No products available for this category
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
