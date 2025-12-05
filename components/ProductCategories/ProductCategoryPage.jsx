"use client";

import { useEffect, useState } from "react";
import { getCategoryPageGQL } from "../graphql";
import { frontendClient } from "../../lib/graphql-clients";
import { getAsset, getLegacyAsset } from "../utils";
import CategoryHeader from "./CategoryHeader";
import CategoryProduct from "./CategoryProduct";

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

const normalizeProducts = (rawProducts = []) =>
  rawProducts.map((p) => {
    let imageUrl =
      "https://gms-backend.centauri-tech.com/assets/f9d2fe8d-3ac1-433e-aaf8-9a8db30b366f";

    if (p.v2_product) {
      if (p.image_v2?.id) {
        imageUrl = getAsset(p.image_v2.id);
      }
    } else if (p.image) {
      imageUrl = getLegacyAsset(p.image);
    }

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.meta_description || "",
      imageUrl,
      link: `/main-product/${p.slug}`,
    };
  });

const ProductCategoryPage = ({ slug }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!slug) return;
    const fetchProducts = async (categorySlug) => {
      setLoading(true);
      setProducts([]);
      setCategory(undefined);
      const { restrictedSlug } = getSuperCategory(categorySlug);
      try {
        const { backend_product, backend_category } =
          await frontendClient.request(getCategoryPageGQL, {
            slug: categorySlug,
            page: 1,
            slugs: restrictedSlug,
          });

        setCategory(backend_category?.[0]);
        setProducts(normalizeProducts(backend_product));
      } catch (e) {
        setCategory(undefined);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(slug);
  }, [slug]);

  return (
    <>
      <CategoryHeader activeSlug={slug} />
      <CategoryProduct
        categoryName={category?.name}
        categoryDescription={category?.description}
        productCount={products?.length}
        products={products}
        loading={loading}
      />
    </>
  );
};

export default ProductCategoryPage;
