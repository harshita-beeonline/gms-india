"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import styles from "../../styles/Brand.module.scss";
import brandone from "../../public/images/brandone.png";
import brand2 from "../../public/images/brand2.png";
import brandthree from "../../public/images/brandthree.jpg";
import brandfour from "../../public/images/brandfour.jpg";
import brandfive from "../../public/images/brandfive.jpg";
import brandsix from "../../public/images/brandsix.jpg";
import brand7 from "../../public/images/brand7.png";
import brandeight from "../../public/images/brandeight.png";
import brand9 from "../../public/images/brand9.png";
import brand13 from "../../public/images/brand13.png";
import brand14 from "../../public/images/brand14.png";
import brand15 from "../../public/images/brand15.png";
import brand16 from "../../public/images/brand16.png";
import brand21 from "../../public/images/brand21.png";
import brand18 from "../../public/images/brand18.png";
import brand19 from "../../public/images/brand19.png";
import Image from "next/image";
const text1 = `Over the years, we’ve earned the trust of brands that value innovation, creativity, and results that speak for themselves.`;
const Brand = () => {
  const imageData = [
    brandone,
    brand2,
    brand13,
    brandthree,
    brandfour,
    brandfive,
    brand14,
    brandsix,
    brand7,
    brandeight,
    brand15,
    brand9,
    brand21,
    brand18,
    brand16,
    brand19,
  ];
  const { ref, inView } = useInView({
    triggerOnce: false, // run every time
    threshold: 0.2, // 20% visible
  });
  return (
    <div className={styles["brand-main-content"]}>
      <div className={styles["brand-left-right-content"]}>
        <div className={styles["brand-left-content"]}>
          <h2>Brands That Believe in Us</h2>
          <p>{text1}</p>
        </div>
        <div className={styles["brand-right-content"]} ref={ref}>
          {imageData.map((item, index) => (
            <div className={styles["image-content"]} key={index}>
              <Image
                src={item}
                alt="brand logo"
                className={inView ? "animate__animated animate__zoomIn" : ""}
                style={{
                  animationDelay: inView ? `${index * 0.2}s` : "0s",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
