import React from "react";
import styles from "../../styles/CategoryProduct.module.scss";
import Link from "next/link";
import viewhovericon from '../../public/images/viewhovericon.svg';
import hovericon1 from '../../public/images/hovericon1.svg'
import Image from "next/image";
const CategoryProduct = ({
  categoryName = "",
  fallbackName = "",
  productCount,
  categoryDescription = "",
  products = [],
  loading = false,
}) => {
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
            products.map((item, index) => (
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
                  <button className={styles["add-cart-btn"]}>
                    <Image src={hovericon1} alt="img"/>Add to Cart</button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryProduct;
