"use client";

import React from "react";
import styles from "../../styles/CategoryProduct.module.scss";
import Link from "next/link";
import viewhovericon from '../../public/images/viewhovericon.svg';
import hovericon1 from '../../public/images/hovericon1.svg'
import Image from "next/image";
import { useAppStore } from "../../store";
const CategoryProduct = ({
  categoryName = "",
  fallbackName = "",
  productCount,
  categoryDescription = "",
  products = [],
  loading = false,
}) => {
  const appStore = useAppStore();
  const headingCount =
    productCount !== undefined
      ? productCount
      : products?.length || 0;

  const headingName =
    (categoryName && categoryName.trim().length > 0
      ? categoryName
      : fallbackName && fallbackName.trim().length > 0 && !loading
      ? fallbackName
      : loading
      ? "Loading..."
      : "Category");
  const descriptionText =
    categoryDescription && categoryDescription.trim().length > 0 && !loading
      ? categoryDescription
      : !loading && fallbackName
      ? `Explore our ${fallbackName.toLowerCase()} selection.`
      : "";
  const statusStyles = {
    gridColumn: "1 / -1",
    textAlign: "center",
    width: "100%",
  };

  const handleAddToCart = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    appStore.addToCart({
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.imageUrl || item.image || "",
    });
  };

  return (
    <div className={styles["all-category-product-section"]}>
      <div className={styles["category-text-and-cards"]}>
        <h2>
          {headingName} <span>{headingCount} products found</span>
        </h2>
        {descriptionText && <p>{descriptionText}</p>}
        <div className={styles["category-main-cards-sections"]}>
          {loading && products.length === 0 && (
            <p style={statusStyles}>Loading products...</p>
          )}
          {!loading && products.length === 0 && (
            <p style={statusStyles}>No products found.</p>
          )}
          {!loading &&
            products.map((item, index) => {
              const inCart = appStore.cartItems.find((c) => c.id === item.id);
              return (
                <Link
                  href={item.link || `/product/${item.slug || ""}`}
                  key={index}
                >
                  <div className={styles["product-card"]}>
                    <div className={styles["product-image"]}>
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name || "image"} />
                      ) : (
                        <img src={item.image || ""} alt={item.name || "image"} />
                      )}
                    </div>
                    <h5>{item.name}</h5>
                    <p>{item.description || item.details}</p>
                    <button className={styles["view-product-btn"]}>
                      <Image src={viewhovericon} alt="img"/>View Product
                    </button>
                    <button
                      type="button"
                      className={styles["add-cart-btn"]}
                      onClick={(event) => handleAddToCart(event, item)}
                    >
                      <Image src={hovericon1} alt="img"/>
                      {inCart ? "Item in Cart" : "Add to Cart"}
                    </button>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default CategoryProduct;
