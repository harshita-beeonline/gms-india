"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/MainProduct.module.scss";
import mainproductimage from "../../public/images/mainproductimage.png";
import buttonicon1 from "../../public/images/buttonicon1.svg";
import buttonicon2 from "../../public/images/buttonicon2.svg";
import buttonicon3 from "../../public/images/buttonicon3.svg";
import hovericon1 from "../../public/images/hovericon1.svg";
import hovericon2 from "../../public/images/hovericon2.svg";
import hovericon3 from "../../public/images/hovericon3.svg";
import { GetProductGQL, getRelatedProductsGql } from "../graphql";
import { getAsset, getLegacyAsset } from "../utils";
import { useAppStore } from "../../store";
import { frontendClient } from "../../lib/graphql-clients";
import ProductCard from "../ProductCard";
import productminiimage from "../../public/images/productminiimage.png";
const placeholderImage =
  "https://gms-backend.centauri-tech.com/assets/f9d2fe8d-3ac1-433e-aaf8-9a8db30b366f";

const stripHtml = (html) =>
  html ? html.replace(/<[^>]*>?/gm, " ").replace(/\s+/g, " ").trim() : "";

const MainProductDynamic = ({ slug }) => {
  const router = useRouter();
  const appStore = useAppStore();
  const [openInfoDropdown, setOpenInfoDropdown] = useState(null);
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleInfoDropdown = (name) => {
    setOpenInfoDropdown(openInfoDropdown === name ? null : name);
  };

  useEffect(() => {
    if (!slug) return;
    fetchProduct(slug);
  }, [slug]);

  const fetchProduct = async (productSlug) => {
    setLoading(true);
    try {
      const { backend_product } = await frontendClient.request(GetProductGQL, {
        slug: productSlug,
      });

      if (!backend_product || backend_product.length === 0) {
        router.push("/404");
        return;
      }

      const currentProduct = backend_product[0];
      setProduct(currentProduct);

      const productId = currentProduct.id;
      const numericId = Number(productId);
      const filterId = Number.isNaN(numericId) ? productId : numericId;
      const related = await frontendClient.request(getRelatedProductsGql, {
        title: currentProduct.name,
        category: currentProduct.category_id.name,
        id: filterId,
      });
      setRelatedProducts(related.backend_product || []);
    } catch (e) {
      setProduct(undefined);
      setRelatedProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    if (!product) return;
    appStore.addToCart({
      id: product.id || "",
      name: product.name || "",
      slug: product.slug || "",
      image: getLegacyAsset(product.image || ""),
      v2_product: product.v2_product || false,
    });
  };

  const sendEnquiry = () => {
    addToCart();
    router.push("/cart");
  };

  const getImageUrl = () => {
    if (!product) return placeholderImage;
    if (product.v2_product) {
      return product.image_v2?.id ? getAsset(product.image_v2.id) : placeholderImage;
    }
    return product.image ? getLegacyAsset(product.image) : placeholderImage;
  };

  const getDataSheetUrl = () => {
    if (!product) return "";
    if (product.v2_product) {
      return product.data_sheet_v2?.id ? getAsset(product.data_sheet_v2.id) : "";
    }
    return product.data_sheet ? getLegacyAsset(product.data_sheet) : "";
  };

  const getManufacturerLogoUrl = () => {
    const manufacturer = product?.manufacturer_id;
    if (!manufacturer) return "";

    if (manufacturer.image_v2?.id) {
      return getAsset(manufacturer.image_v2.id);
    }

    if (manufacturer.image) {
      return getLegacyAsset(manufacturer.image);
    }

    return "";
  };

  const dropdownData = [
    {
      name: "Applications",
      html: product?.applications,
    },
    {
      name: "Technical Specifications",
      html: product?.technical_specs,
    },
  ];

  const overviewText =
    product?.meta_description ||
    stripHtml(product?.overview || "") ||
    "Product details coming soon.";

  if (loading || !product) {
    return (
      <div className={styles["main-product-page-section"]}>
        <p>Loading product...</p>
      </div>
    );
  }

  const dataSheetUrl = getDataSheetUrl();
  const addToCartText = appStore.cartItems.find((c) => c.id === product.id)
    ? "Item in Cart"
    : "Add To Cart";
  const imageSrc = getImageUrl() || mainproductimage.src;
  const manufacturerLogo = getManufacturerLogoUrl();
  const manufacturerUrl = product.manufacturer_id?.url;
  const manufacturerName = product.manufacturer_id?.name || "Manufacturer logo";

  return (
    <div className={styles["main-product-page-section"]}>
      <div className={styles["main-product-left-right-section"]}>
        <div className={styles["main-product-left-section"]}>
          <div className={styles["product-mini-image"]}>
            {manufacturerLogo ? (
              manufacturerUrl ? (
                <a href={manufacturerUrl} target="_blank" rel="noreferrer">
                  <img src={manufacturerLogo} alt={manufacturerName} />
                </a>
              ) : (
                <img src={manufacturerLogo} alt={manufacturerName} />
              )
            ) : (
              <img src={productminiimage.src} alt="Brand logo placeholder" />
            )}
          </div>
          <div className={styles["product-main-image"]}>
            <img src={imageSrc} alt={product.name} />
          </div>
        </div>
        <div className={styles["main-product-right-section"]}>
          <h2>{product.name}</h2>
          <h6>{product.manufacturer_id?.name || "Product by GMS"}</h6>
          <p>{overviewText}</p>
          <div className={styles["buttons-cart-send-sheet"]}>
            <button className={styles["white-button"]} onClick={addToCart}>
              <img src={buttonicon1.src} alt="Add to cart" className={styles["normal-btn"]} />
              <img src={hovericon1.src} alt="Add to cart" className={styles["hover-btn"]} />
              {addToCartText}
            </button>
            <button
              className={styles["blue-button"]}
              onClick={() => {
                if (!dataSheetUrl) return;
                window.open(dataSheetUrl, "_blank");
              }}
              disabled={!dataSheetUrl}
            >
              <img src={buttonicon2.src} alt="Data sheet" className={styles["normal-btn"]} />
              <img src={hovericon2.src} alt="Data sheet" className={styles["hover-btn"]} />
              Data Sheet
            </button>
            <button className={styles["blue-button"]} onClick={sendEnquiry}>
              <img src={buttonicon3.src} alt="Enquiry" className={styles["normal-btn"]} />
              <img src={hovericon3.src} alt="Enquiry" className={styles["hover-btn"]} />
              Send an Enquiry
            </button>
          </div>
          <div className={styles["application-technical-dropdown"]}>
            <div className={styles["dropdown-content"]}>
              {dropdownData.map((data) => (
                <div key={data.name} className={styles["divider"]}>
                  <div
                    className={styles["dropdwon-list"]}
                    onClick={() => toggleInfoDropdown(data.name)}
                  >
                    <h6>{data.name}</h6>
                    <svg
                      className={openInfoDropdown === data.name ? styles.rotated : ""}
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1C13 1 8.58105 6.99999 6.99995 7C5.41885 7.00001 1 1 1 1"
                        stroke="#1C1C1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {openInfoDropdown === data.name && (
                    <div className={styles["dropdown-html"]}>
                      {data.html ? (
                        <div dangerouslySetInnerHTML={{ __html: data.html }} />
                      ) : (
                        "Content not available."
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={` ${relatedProducts.length === 0 ? "hidden" : "mt-3"} `}>
        <p className="text-slate-500">Related products:</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-evenly mt-3 gap-2">
          {relatedProducts.map((p, k) => (
            <ProductCard key={k} linkPrefix="/main-product" {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProductDynamic;
