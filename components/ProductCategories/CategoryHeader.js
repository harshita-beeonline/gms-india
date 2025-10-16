"use client";
import React, { useState } from "react";
import styles from "../../styles/CategoryHeader.module.scss";
import category1 from "../../public/images/category1.svg";
import category2 from "../../public/images/category2.svg";
import category3 from "../../public/images/category3.svg";
import Image from "next/image";
import CategoryProduct from "./CategoryProduct";

// Define all categories and their subcategories
const categories = [
  {
    name: "Components",
    icon: category1,
    subcategories: [
      {
        name: "PVD Components",
        items: ["E-Beam Guns", "E-Beam Power Supplies", "E-Beam Controllers"],
      },
    ],
  },
  {
    name: "Equipment",
    icon: category2,
    subcategories: [
      {
        name: "Lithography",
        items: [
          "Spean Coater",
          "Mask Alligner",
          "UV Exposer",
          "Direct Write Lithography",
          "Spin Developer",
          "Bake Plates",
        ],
      },
      { name: "Laser Bonding", items: [] },
      { name: "Cleanroom Equipment", items: [] },
      {
        name: "Assembly & Packaging",
        items: [
          "Wire Bonder",
          "Die Bonder",
          "Laser Micromachinig",
          "Wafer Bonder",
          "Wafer Grinding Lapping & Polishing",
          "Resistance Welding",
          "Laser Trimmers",
          "Plasma Cleaning Systems",
          "Solder Ball Attach and Reflow",
          "Direct Write Lithography",
          "Debonders",
          "Dicing Machine",
        ],
      },
    ],
  },
  {
    name: "Materials",
    icon: category3,
    subcategories: [
      {
        name: "All Materials",
        items: ["Aluminium", "Steel", "Plastic", "Glass", "Rubber"],
      },
    ],
  },
];

const CategoryHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null); // Close sub-dropdown when switching main dropdown
  };

  const toggleSubDropdown = (name) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  return (
    <>
      <div className={styles["category-header-section"]}  onMouseLeave={() => toggleDropdown(false)}>
        <div className={styles["all-category-headings"]}>
          {categories.map((category) => (
            <div key={category.name}>
              {/* Main Category */}
              <div
                className={`${styles["icon-and-text"]} ${
                  openDropdown === category.name ? styles.active : ""
                }`}
                
                onMouseEnter={() => toggleDropdown(category.name)}
              >
                <Image src={category.icon} alt={category.name} />
                <h5>{category.name}</h5>
              </div>

              {/* Dropdown */}
              {openDropdown === category.name && (
                <div className={styles["dropdown-content"]}>
                  {category.subcategories.map((sub) => (
                    <div key={sub.name}>
                      <div
                        className={styles["sub-dropdwon-list"]}
                        onClick={() => toggleSubDropdown(sub.name)}
                      >
                        <h6>{sub.name}</h6>
                        {sub.items.length > 0 && (
                          <svg
                            className={
                              openSubDropdown === sub.name ? styles.rotated : ""
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

                      {openSubDropdown === sub.name && sub.items.length > 0 && (
                        <ul>
                          {sub.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <CategoryProduct />
    </>
  );
};

export default CategoryHeader;
