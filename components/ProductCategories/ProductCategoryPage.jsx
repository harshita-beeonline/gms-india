"use client";

import { useEffect, useState } from "react";
import { getCategoryPageGQL } from "../graphql";
import { frontendClient } from "../../lib/graphql-clients";
import { getAsset, getLegacyAsset } from "../utils";
import CategoryHeader from "./CategoryHeader";
import CategoryProduct from "./CategoryProduct";
import { useAppStore } from "../../store";

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
      link: `/product/${p.slug}`,
    };
  });

const formatSlugLabel = (value = "") =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const collectDescendantSlugs = (node) => {
  if (!node) return [];
  const ownSlug = node.slug ? [node.slug] : [];
  const childSlugs = Array.isArray(node.category_self_rel)
    ? node.category_self_rel.flatMap((child) => collectDescendantSlugs(child))
    : [];
  return [...ownSlug, ...childSlugs];
};

const findCategoryBySlug = (nodes = [], slug) => {
  for (const node of nodes) {
    if (node?.slug === slug) {
      return node;
    }
    const match = findCategoryBySlug(node?.category_self_rel || [], slug);
    if (match) {
      return match;
    }
  }
  return null;
};

const deriveSlugsFromTree = (tree = [], slug) => {
  const node = findCategoryBySlug(tree, slug);
  if (!node) {
    return [];
  }
  return Array.from(new Set(collectDescendantSlugs(node).filter(Boolean)));
};

const ProductCategoryPage = ({ slug }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const { categoryTree, fetchCategoryTree } = useAppStore((state) => ({
    categoryTree: state.categoryTree,
    fetchCategoryTree: state.fetchCategoryTree,
  }));

  useEffect(() => {
    if (!categoryTree || categoryTree.length === 0) {
      fetchCategoryTree();
    }
  }, [categoryTree, fetchCategoryTree]);

  useEffect(() => {
    if (!slug) return;
    const fetchProducts = async (categorySlug) => {
      setLoading(true);
      setProducts([]);
      setCategory(undefined);
      const { restrictedSlug } = getSuperCategory(categorySlug);
      const slugsFromTree = deriveSlugsFromTree(categoryTree, categorySlug);
      const slugsForQuery = Array.from(
        new Set([
          ...(slugsFromTree.length > 0 ? slugsFromTree : [categorySlug]),
          ...restrictedSlug,
        ])
      );
      try {
        const { backend_product, backend_category } =
          await frontendClient.request(getCategoryPageGQL, {
            slug: categorySlug,
            page: 1,
            slugs: slugsForQuery,
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
  }, [slug, categoryTree]);

  return (
    <>
      <CategoryHeader activeSlug={slug} />
      <CategoryProduct
        categoryName={category?.name}
        fallbackName={!loading ? formatSlugLabel(slug) : ""}
        categoryDescription={category?.description}
        productCount={products?.length}
        products={products}
        loading={loading}
      />
    </>
  );
};

export default ProductCategoryPage;
