import React from "react";
import styles from "../../styles/BlogCards.module.scss";
import Image from "next/image";
import blog1 from "../../public/images/blog1.png";
import blog2 from "../../public/images/blog2.png";
import blog3 from "../../public/images/blog3.png";
import blog4 from "../../public/images/blog4.png";
import blog5 from "../../public/images/blog5.png";
import blog6 from "../../public/images/blog6.png";
import blog7 from "../../public/images/blog7.png";
import blog8 from "../../public/images/blog8.png";
import Link from "next/link";
const BlogCards = () => {
  const cardData = [
    { 
      link:"/",
      img: blog7,
      title:
        "Tools and Technologies Required to Setup a University-Level 2-inch Fabrication Facility",
    },
    { 
      link:"/",
      img: blog2,
      title: "Setting Up a Mini OSAT: Essential Tools and Technologies",
    },
    { 
      link:"/",
      img: blog1,
      title:
        "Semiconductor Wafer Types and Strategic Manufacturing Opportunities for India",
    },
    {
      link:"/",
      img: blog3,
      title: "The Semiconductor Talent Demand In India: A Critical Junction",
    },
    { 
      link:"/",
      img: blog4,
      title:
        "Why Work Area and Wire Diameter Matter More Than You Think in Wire Bonding",
    },
    { 
      link:"/",
      img: blog5,
      title:
        "How the DIE Transfer Film (DTF) Process Elevates Sinter Bonding Efficiency",
    },
    {
      link:"/",
      img: blog8,
      title:
        "BAMFIT: The Future of Bond Wire Reliability Testing – Fast, Accurate, and Predictive",
    },
    { 
      link:"/",
      img: blog6,
      title:
        "The Evolution of Semiconductor Design: Embracing 3D Chip Stacking and Heterogeneous Integration ",
    },
  ];
  return (
    <div className={styles["blog-cards-section"]}>
      <div className={styles["blog-all-cards-section"]}>
        {cardData.map((item, index) => (
         <Link href={item.link} key={index}>
          <div className={styles["main-blog-card"]}>
            <div className={styles["blog-image"]}>
              <Image src={item.img} alt="image" />
            </div>
            <div className={styles["blog-details"]}>
              <h3>{item.title}</h3>
              <button>
                Read More{" "}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75977 2.06934C8.66667 1.97624 8.55664 1.92969 8.42969 1.92969C8.30273 1.92969 8.19271 1.97624 8.09961 2.06934C8.00651 2.15397 7.95996 2.25977 7.95996 2.38672C7.95996 2.51367 8.00651 2.6237 8.09961 2.7168L11.4258 6.04297H0.457031C0.330078 6.04297 0.222168 6.0874 0.133301 6.17627C0.0444336 6.26514 0 6.37305 0 6.5C0 6.62695 0.0444336 6.73486 0.133301 6.82373C0.222168 6.9126 0.330078 6.95703 0.457031 6.95703H11.4258L8.09961 10.2832C8.00651 10.3678 7.95996 10.4757 7.95996 10.6069C7.95996 10.7381 8.00651 10.846 8.09961 10.9307C8.19271 11.0238 8.30273 11.0703 8.42969 11.0703C8.55664 11.0703 8.66667 11.0238 8.75977 10.9307L12.8604 6.83008C12.9535 6.73698 13 6.62695 13 6.5C13 6.37305 12.9535 6.26302 12.8604 6.16992L8.75977 2.06934Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
         </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
