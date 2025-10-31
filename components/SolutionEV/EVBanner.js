import React from "react";
import styles from "../../styles/EVBanner.module.scss";

const EVBanner = () => {
  const cardData = [
    {
      title: "Equipments",
      details:
        "Equipment sourced from Industry Leading Manufacturers powered by our well-supported after-sales services for reliability and assurance.",
    },
    {
      title: "Materials",
      details:
        "Ensuring high performance and delivering robust solutions to successfully lead innovative processes with efficiency and excellence.",
    },
    {
      title: "Components",
      details:
        "We provide our own specialized and unique products, specifically designed to effectively fill carefully identified and existing market gaps.",
    },
    {
      title: "Custom Solutions",
      details:
        "Based on the idea of detailed engineering technical approach towards design implementation, we ensure to meet your requirements.",
    },
  ];
  return (
    <>
      <div className={styles["ev-page-banner-section"]}>
        <div className={styles["ev-left-right-content"]}>
          <div className={styles["ev-left-content"]}>
            <h2>
              Leverading Advanced Technology Capabilities to Deliver
              State-of-the-Art EV Solutions
            </h2>
            <div className={styles["button-div"]}>
              <button>Let’s Work Together</button>
            </div>
          </div>
          <div className={styles["ev-right-content"]}>
            <div className={styles["solution-ev"]}>
              <h5>Solutions</h5>
              <h5 className={styles["have-divider"]}>EV</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["ev-text-cards-section"]}>
        <h4>Curated solutions for all your product needs</h4>
        <div className={styles["ev-all-cards-section"]}>
          {cardData.map((item, index) => (
            <div className={styles["ev-product-card"]} key={index}>
              <h5>{item.title}</h5>
              <p style={{minHeight:"120px"}}>{item.details}</p>
              <svg
                width="18"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1265_964)">
                  <g clip-path="url(#clip1_1265_964)">
                    <path
                      d="M15.8956 13.1562L10.753 8.01367L9.28367 9.46002L11.9468 12.1231L0.101562 12.1461V14.2123L11.9468 14.1893L9.28367 16.8524L10.753 18.3217L15.8956 13.1562Z"
                      fill="#3B5BA6"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1265_964">
                    <rect
                      width="18"
                      height="10"
                      fill="white"
                      transform="translate(0 8)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1265_964">
                    <rect
                      width="16"
                      height="11"
                      fill="white"
                      transform="translate(0 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EVBanner;
