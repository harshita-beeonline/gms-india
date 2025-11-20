import React from "react";
import styles from "../../styles/CategoryProduct.module.scss";
import product1 from "../../public/images/product1.png";
import product2 from "../../public/images/product2.png";
import product3 from "../../public/images/product3.png";
import Image from "next/image";
import Link from "next/link";
const CategoryProduct = () => {
  const cardsData = [
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product2,
      name: "Preferred Float Zone Silicon Wafers",
      details:
        "Float Zone-Preferred Float Zone(FZ-PFZ) silicon wafer has the lowest resist..",
    },
    {
      link: "/main-product",
      image: product3,
      name: "Float Zone Silicon Wafers",
      details:
        "Most power electronics devices are manufactured using float zone wafers for...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product2,
      name: "Preferred Float Zone Silicon Wafers",
      details:
        "Float Zone-Preferred Float Zone(FZ-PFZ) silicon wafer has the lowest resist..",
    },
    {
      link: "/main-product",
      image: product3,
      name: "Float Zone Silicon Wafers",
      details:
        "Most power electronics devices are manufactured using float zone wafers for...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product2,
      name: "Preferred Float Zone Silicon Wafers",
      details:
        "Float Zone-Preferred Float Zone(FZ-PFZ) silicon wafer has the lowest resist..",
    },
    {
      link: "/main-product",
      image: product3,
      name: "Float Zone Silicon Wafers",
      details:
        "Most power electronics devices are manufactured using float zone wafers for...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
  ];
  return (
    <div className={styles["all-category-product-section"]}>
      <div className={styles["category-text-and-cards"]}>
        <h2>
          Equipment <span>48 products found</span>
        </h2>
        <p>
          Range of Equipment are mainly to semiconductors and microelectronics
          fabrication and assembly
        </p>
        <div className={styles["category-main-cards-sections"]}>
          {cardsData.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className={styles["product-card"]}>
                <div className={styles["product-image"]}>
                  <Image src={item.image} alt="image" />
                </div>
                <h5>{item.name}</h5>
                <p>{item.details}</p>
                <button className={styles["view-product-btn"]}>
                  View Product
                </button>
                <button className={styles["add-cart-btn"]}>Add to Cart</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryProduct;
