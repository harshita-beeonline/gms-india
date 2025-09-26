"use client";

/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryTree from "../CategoryTree";
import { GetProductGQL, getRelatedProductsGql } from "../graphql";
import MiniSearch from "../MiniSearch";
import OGP from "../OGP";
import ProductCard from "../ProductCard";
import { getAsset, getLegacyAsset } from "../utils";
import { useAppStore } from "../../store";
import { frontendClient } from "../../lib/graphql-clients";

const Product = ({ slug }) => {
  const [treeOpen, setTreeOpen] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/4 px-2">
        <MiniSearch />
        <button
          onClick={() => setTreeOpen((t) => !t)}
          className="block lg:hidden px-4 py-2 mx-auto w-full my-2 shadow-sm border border-gms rounded-md text-gray-600"
        >
          {treeOpen ? "Close Categories" : "Show Categories"}
        </button>
        <div className={` ${treeOpen ? "block" : "hidden"} lg:block `}>
          <CategoryTree />
        </div>
      </div>

      <ProductElement slug={slug} />
    </div>
  );
};

const ProductElement = ({ slug }) => {
  const appStore = useAppStore();
  const [product, setProduct] = useState();
  const [related_products, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchProduct(slug);
  }, [slug]);

  const fetchProduct = async (productSlug) => {
    setLoading(true);
    const { backend_product } = await frontendClient.request(GetProductGQL, {
      slug: productSlug,
    });

    if (!backend_product || backend_product.length === 0) {
      router.push("/404");
      return;
    }
    setProduct(backend_product[0]);
    const productId = backend_product[0].id;
    const numericId = Number(productId);
    const filterId = Number.isNaN(numericId) ? productId : numericId;
    const relatedProducts = await frontendClient.request(
      getRelatedProductsGql,
      {
        title: backend_product[0].name,
        category: backend_product[0].category_id.name,
        id: filterId,
      }
    );
    setRelatedProducts(relatedProducts.backend_product);
    setLoading(false);
  };

  const addToCart = () => {
    appStore.addToCart({
      id: product?.id || "",
      name: product?.name || "",
      slug: product?.slug || "",
      image: getLegacyAsset(product?.image || ""),
      v2_product: product?.v2_product || false,
    });
  };

  const sendEnquiry = () => {
    addToCart();
    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="lg:w-3/4 lg:container mx-auto lg:p-10 p-4">
        Loading Product
      </div>
    );
  }

  if (product === undefined) {
    return (
      <div className="lg:w-3/4 lg:container mx-auto lg:p-10 p-4">
        Loading Product
      </div>
    );
  }

  return (
    <div className="lg:w-3/4 lg:container mx-auto lg:p-10 p-4">
      <OGP title={product.name} image={getLegacyAsset(product.image)} />
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/3 flex flex-col gap-y-4">
          <div className="border-4 border-gms">
            <div className="border-b-4 border-gms">
              <a
                className="block h-auto p-4"
                target={"_blank"}
                rel="noreferrer"
                href={product.manufacturer_id.url}
              >
                {product.manufacturer_id.image_v2 !== null ? (
                  <img
                    alt={product.manufacturer_id.name}
                    className="block mx-auto max-h-[80px]"
                    src={getAsset(product.manufacturer_id.image_v2.id)}
                  />
                ) : (
                  <img
                    className="block mx-auto max-h-[80px]"
                    src={getLegacyAsset(product.manufacturer_id.image)}
                    alt={product.manufacturer_id.name}
                  />
                )}
              </a>
            </div>
            <img
              width={350}
              className="block mx-auto m-5"
              src={
                product.v2_product
                  ? getAsset(product.image_v2.id)
                  : getLegacyAsset(product.image)
              }
              alt={product.name}
            />
          </div>
        </div>
        <div className="lg:w-2/3 lg:p-6 flex flex-col gap-y-4">
          <h1 className="text-4xl text-gms block mt-4 lg:mt-0">
            {product.name}
          </h1>
          <div
            className="prose w-full"
            dangerouslySetInnerHTML={{ __html: product.overview }}
          />
          <div>
            <h3 className="text-3xl text-gms">Applications</h3>
            <div className="bg-[#2f4b94] mt-2 rounded-md p-4 h-44 overflow-y-scroll">
              <div
                className="prose text-slate-200"
                dangerouslySetInnerHTML={{ __html: product.applications }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col mx-auto gap-y-3 my-4">
        <div className="lg:w-1/3 flex justify-center lg:ml-10">
          <a
            className="rounded-full text-lg text-slate-200 py-3 px-8 bg-[#4b8bf5] hover:bg-indigo-900 inline-block"
            href={
              product.v2_product
                ? getAsset(product.data_sheet_v2.id)
                : getLegacyAsset(product.data_sheet)
            }
          >
            Data Sheet
          </a>
        </div>
        <div className="lg:w-full flex lg:flex-row flex-col justify-center lg:gap-x-3 gap-y-2">
          <button
            className="rounded-full text-lg text-slate-200 py-3 px-8 bg-[#4b8bf5] hover:bg-indigo-900 inline-block"
            onClick={addToCart}
          >
            {appStore.cartItems.find((c) => c.id === product.id)
              ? "Item in Cart"
              : "Add to Cart"}
          </button>
          <button
            className="rounded-full text-lg text-slate-200 py-3 px-8 bg-[#4b8bf5] hover:bg-indigo-900 inline-block text-center"
            onClick={sendEnquiry}
          >
            Send an Enquiry
          </button>
        </div>
      </div>
      <div className="lg:p-6 p-3">
        <h2 className="text-4xl text-gms text-center">
          Technical Specifications
        </h2>
        <div className="bg-[#2f4b94] mt-3 rounded-md p-6 h-64 overflow-y-scroll">
          <div
            className="prose text-slate-200"
            dangerouslySetInnerHTML={{ __html: product.technical_specs }}
          />
        </div>
      </div>
      <div className={` ${related_products.length === 0 ? "hidden" : "mt-3"} `}>
        <p className="text-slate-500">Related products:</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-evenly mt-3 gap-2">
          {related_products.map((p, k) => (
            <ProductCard key={k} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
