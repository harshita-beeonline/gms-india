import React from "react";
import styles from "../../styles/Brand.module.scss";
import brandone from "../../public/images/brandone.png";
import brandtwo from "../../public/images/brandtwo.png";
import brandthree from "../../public/images/brandthree.jpg";
import brandfour from "../../public/images/brandfour.jpg";
import brandfive from "../../public/images/brandfive.jpg";
import brandsix from "../../public/images/brandsix.jpg";
import brandseven from "../../public/images/brandseven.jpg";
import brandeight from "../../public/images/brandeight.png";
import brandnine from "../../public/images/brandnine.jpg";
import brandten from "../../public/images/brandten.jpg";
import brandeleven from "../../public/images/brandeleven.jpg";
import brandtuwel from "../../public/images/brandtuwel.png";
import Image from "next/image";
const text1 = `Over the years, we’ve earned the trust of brands that value innovation, creativity, and results that speak for themselves.`;
const Brand = () => {
  const imageData = [
    brandone,
    brandtwo,
    brandthree,
    brandfour,
    brandfive,
    brandsix,
    brandseven,
    brandeight,
    brandnine,
    brandten,
    brandeleven,
    brandtuwel,
  ];
  return (
    <div className={styles["brand-main-content"]}>
      <div className={styles["brand-left-right-content"]}>
        <div className={styles["brand-left-content"]}>
          <h2>Brands That Believe in Us</h2>
          <p>{text1}</p>
        </div>
        <div className={styles["brand-right-content"]}>
          {imageData.map((item,index)=>(
            <div className={styles["image-content"]} key={index}>
                <Image src={item} alt="image"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
