"use client";
import React, { useState } from "react";
import styles from "../../styles/CategoryHeader.module.scss";
import category1 from "../../public/images/category1.svg";
import category2 from "../../public/images/category2.svg";
import category3 from "../../public/images/category3.svg";
import Image from "next/image";
import CategoryProduct from "./CategoryProduct";

const CategoryHeader = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const categoryData = [
    {
      icon: category1,
      name: "Components",
    },
    {
      icon: category2,
      name: "Equipment",
    },
    {
      icon: category3,
      name: "Materials",
    },
  ];
  return (
    <>
      <div className={styles["category-header-section"]}>
        <div className={styles["all-category-headings"]}>
          {categoryData.map((item, index) => (
            <div
              key={index}
              className={`${styles["icon-and-text"]} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image src={item.icon} alt="svg" />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <CategoryProduct />
    </>
  );
};

export default CategoryHeader;
