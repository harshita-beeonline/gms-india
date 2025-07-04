import React from "react";
import styles from "../../styles/AreaOfExpertise.module.scss";
import areaone from "../../public/images/areaone.svg";
import areatwo from "../../public/images/areatwo.svg";
import areathree from "../../public/images/areathree.svg";
import Image from "next/image";
const AreaOfExpertise = () => {
  const cardData = [
    {
      icon: areaone,
      title: "Components",
      details:
        "Precision-engineered components for high-performance EVs, semiconductors, MEMS, and microelectronics applications.",
    },
    {
      icon: areatwo,
      title: "Equipment",
      details:
        "Advanced manufacturing and testing equipment tailored for research labs and industrial-scale production in cutting-edge tech domains.",
    },
    {
      icon: areathree,
      title: "Material",
      details:
        "High-purity, application-specific materials that drive innovation across solar, LED, thin films, and semiconductor industries.",
    },
  ];
  return (
    <div className={styles["area-of-expertise-content"]}>
      <h2>Our Area of Expertise</h2>
      <div className={styles["area-of-expertise-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["expertise-card"]} key={index}>
            <div className={styles["image-div"]}>
              <Image src={item.icon} alt="image" />
            </div>
            <h5>{item.title}</h5>
            <p>{item.details}</p>
            <button>
              <svg
                width="19"
                height="11"
                viewBox="0 0 19 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_89_658)">
                  <g clip-path="url(#clip1_89_658)">
                    <path
                      d="M16.7977 5.77622L11.6551 0.633667L10.1858 2.08002L12.8489 4.74311L1.00366 4.76608V6.83227L12.8489 6.80933L10.1858 9.47243L11.6551 10.9417L16.7977 5.77622Z"
                      fill="#3B5BA6"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_89_658">
                    <rect
                      width="18"
                      height="10"
                      fill="white"
                      transform="translate(0.900146 0.619995)"
                    />
                  </clipPath>
                  <clipPath id="clip1_89_658">
                    <rect
                      width="16"
                      height="11"
                      fill="white"
                      transform="translate(0.900146 0.619995)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaOfExpertise;
