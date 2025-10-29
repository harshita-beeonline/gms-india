"use client";
import React, { useState } from "react";
import styles from "../../styles/MainProduct.module.scss";
import mainproductimage from "../../public/images/mainproductimage.png";
import Image from "next/image";
import buttonicon1 from "../../public/images/buttonicon1.svg";
import buttonicon2 from "../../public/images/buttonicon2.svg";
import buttonicon3 from "../../public/images/buttonicon3.svg";

const MainProduct = () => {
  const [openInfoDropdown, setOpenInfoDropdown] = useState(null);
  const toggleInfoDropdown = (name) => {
    setOpenInfoDropdown(openInfoDropdown === name ? null : name);
  };

  const dropdownData = [
    {
      name: "Applications",
      items: [
        "Epoxy/Adhesive Die Bonding",
        "UV Die Bonding",
        "TC Die Bonding",
        "U/S Die Bonding",
        "Sintering",
      ],
    },
    {
      name: "Technical Specifications",
      items: [
        "Travel Range with Wafer:400 mm x 410 mm",
        "Wafer Size:2” – 8” (Ring & Frame)",
        "Travel Range w/o Wafer:540 mm x 410 mm",
        "Z-Movement:100 mm",
        "Chip Rotation max.:up to 360°",
        "Bond Force Range:10 g – up to 5.000 g",
        "Axis Speed:up to 1.8 m/sec",
        "Placement Accuracy:8 μm @ 3 sigma",
        "Axis Resolution:XYZ: 0.01 μm, Theta: 0.01°Min./Max.",
        "Component Size:80 μm – 100 mm",
        "Related products:",
      ],
    },
  ];
  return (
    <div className={styles["main-product-page-section"]}>
      <div className={styles["main-product-left-right-section"]}>
        <div className={styles["main-product-left-section"]}>
          <div className={styles["product-main-image"]}>
            <Image src={mainproductimage} alt="image" />
          </div>
        </div>
        <div className={styles["main-product-right-section"]}>
          <h2>T-6000-L</h2>
          <h6>
            TRESKY’s entry-level DIE bonder (standard machine) is the Model
            T-6000-L
          </h6>
          <p>
            This is a fully automatic placement system for universal as well as
            specific use. Designed for maximum flexibility, the T-6000-L can be
            upgraded with a variety of modular option.
          </p>
          <p>
            The T-6000-L insures repeatability and highly accurate results for
            most placement application. The unique manual mode supports die
            bonding proto-types and R&D projects without time consuming
            programming.
          </p>
          <p>This model covers all common interconnect technologies.</p>
          <div className={styles["buttons-cart-send-sheet"]}>
            <button className={styles["white-button"]}>
              <Image src={buttonicon1} alt="img" />
              Data Sheet
            </button>
            <button className={styles["blue-button"]}>
              <Image src={buttonicon2} alt="img" />
              Add To Cart
            </button>
            <button className={styles["blue-button"]}>
              <Image src={buttonicon3} alt="img" />
              Send an Enquiry
            </button>
          </div>
          <div
            className={styles["application-technical-dropdown"]}
            // onMouseLeave={() => toggleInfoDropdown(false)}
          >
            <div className={styles["dropdown-content"]}>
              {dropdownData.map((data) => (
                <div key={data.name} className={styles["divider"]}>
                  <div
                    className={styles["dropdwon-list"]}
                    onClick={() => toggleInfoDropdown(data.name)}
                  >
                    <h6>{data.name}</h6>
                    {data.items.length > 0 && (
                      <svg
                        className={
                          openInfoDropdown === data.name ? styles.rotated : ""
                        }
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
                    )}
                  </div>

                  {openInfoDropdown === data.name && data.items.length > 0 && (
                    <ul>
                      {data.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
