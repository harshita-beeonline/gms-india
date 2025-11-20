import React from "react";
import styles from "../../styles/SemiconductorBanner.module.scss";
const MicroelectronicBanner = () => {
  const cardData = [
    {
      title: "Equipments",
      details:
        "By bringing cutting edge technologies from world renowned manufacturers. GMS ensures you get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyond to match the batteries output spec.",
    },
    {
      title: "Materials",
      details:
        "By bringing cutting edge technologies from world renowned manufacturers. GMS ensures you get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyond to match the batteries output spec.",
    },
    {
      title: "Components",
      details:
        "By bringing cutting edge technologies from world renowned manufacturers. GMS ensures you get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyond to match the batteries output spec.",
    },
    {
      title: "Custom Solutions",
      details:
        "By bringing cutting edge technologies from world renowned manufacturers. GMS ensures you get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyond to match the batteries output spec.",
    },
  ];
  return (
    <>
      <div className={styles["semiconductor-page-banner-section"]}>
        <div className={styles["semiconductor-left-right-content"]}>
          <div className={styles["semiconductor-left-content"]}>
            <h2>
              Bridging Decades of MICROELECTRONICS Expertise with Our Global
              Network of Partners To Bring Success for Our Customers
            </h2>
            <div className={styles["button-div"]}>
            <button>Get Quote</button>
            </div>
          </div>
          <div className={styles["semiconductor-right-content"]}>
            <div className={styles["solution-semiconductor"]}>
              <h5>Solutions</h5>
              <h5 className={styles["have-divider"]}>Microelectronics</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["semiconductor-text-cards-section"]}>
        <h4>Curated solutions for all your product needs</h4>
        <div className={styles["semiconductor-all-cards-section"]}>
          {cardData.map((item, index) => (
            <div className={styles["semiconductor-product-card"]} key={index}>
              <h5>{item.title}</h5>
              <p>{item.details}</p>
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
export default MicroelectronicBanner;
