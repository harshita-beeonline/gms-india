"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/CategoryHeader.module.scss";
import category1 from "../../public/images/category1.svg";
import category2 from "../../public/images/category2.svg";
import category3 from "../../public/images/category3.svg";
import Image from "next/image";
import { useAppStore } from "../../store";

// Icons for master categories
const CATEGORY_ICONS = {
  components: category1,
  equipment: category2,
  materials: category3,
};

// Fallback content if API data is not yet available
const FALLBACK_CATEGORIES = [
  {
    name: "Components",
    slug: "components",
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
    slug: "equipment",
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
    slug: "materials",
    icon: category3,
    subcategories: [
      {
        name: "All Materials",
        items: ["Aluminium", "Steel", "Plastic", "Glass", "Rubber"],
      },
    ],
  },
];

// Optional activeSlug lets parent keep the current category highlighted when landing directly on /product-category/[slug]
const CategoryHeader = ({ activeSlug }) => {
  const router = useRouter();
  const { categoryTree, fetchCategoryTree } = useAppStore((state) => ({
    categoryTree: state.categoryTree,
    fetchCategoryTree: state.fetchCategoryTree,
  }));
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Ensure category tree is loaded
  useEffect(() => {
    if (!categoryTree || categoryTree.length === 0) {
      fetchCategoryTree();
    }
  }, [categoryTree, fetchCategoryTree]);

  const categories = useMemo(() => {
    const masters = (categoryTree || []).filter(
      (cat) =>
        cat?.slug === "components" ||
        cat?.slug === "equipment" ||
        cat?.slug === "materials"
    );

    if (!masters || masters.length === 0) {
      return FALLBACK_CATEGORIES;
    }

    return masters.map((cat) => {
      const subcategories = (cat.category_self_rel || []).map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        items: (sub.category_self_rel || [])
          .map((child) =>
            child?.name && child?.slug
              ? { name: child.name, slug: child.slug }
              : undefined
          )
          .filter(Boolean),
      }));

      return {
        name: cat.name || cat.slug,
        slug: cat.slug,
        icon: CATEGORY_ICONS[cat.slug] || category1,
        subcategories,
      };
    });
  }, [categoryTree]);

  useEffect(() => {
    if (!activeSlug) return;
    const current = categories.find((c) => c.slug === activeSlug);
    if (current) {
      setOpenDropdown(current.name);
    }
  }, [activeSlug, categories]);

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
            <div key={category.slug || category.name}>
              {/* Main Category */}
              <div
                className={`${styles["icon-and-text"]} ${
                  openDropdown === category.name ? styles.active : ""
                }`}
                onMouseEnter={() => toggleDropdown(category.name)}
                onClick={() =>
                  router.push(`/product-category/${category.slug}`)
                }
              >
                <Image src={category.icon} alt={category.name} />
                <h5>{category.name}</h5>
              </div>

              {/* Dropdown */}
              {openDropdown === category.name && (
                <div className={styles["dropdown-content"]}>
                  {category.subcategories.map((sub) => (
                    <div key={sub.slug || sub.name}>
                      <div
                        className={styles["sub-dropdwon-list"]}
                        onClick={() =>
                          sub.slug &&
                          router.push(`/product-category/${sub.slug}`)
                        }
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
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSubDropdown(sub.name);
                            }}
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
                            <li
                              key={item.slug || item.name}
                              onClick={() =>
                                item.slug &&
                                router.push(`/product-category/${item.slug}`)
                              }
                            >
                              {item.name}
                            </li>
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
    </>
  );
};

export default CategoryHeader;
