import React from "react";
import styles from "../../styles/Partnerships.module.scss";
import companyone from "../../public/images/companyone.png";
import companytwo from "../../public/images/companytwo.png";
import companythree from "../../public/images/companythree.png";
import companyfour from "../../public/images/companyfour.png";
import companyfive from "../../public/images/companyfive.png";
import companysix from "../../public/images/companysix.png";
import companyseven from "../../public/images/companyseven.png";
import companyeight from "../../public/images/companyeight.png";
import Image from "next/image";

const Partnerships = () => {
  const companyData = [
    companyone,
    companytwo,
    companythree,
    companyfour,
    companyfive,
    companysix,
    companyseven,
    companyeight,
  ];
  return (
    <div className={styles["partnership-section-content"]}>
      <h2>Powered by Partnerships</h2>
      <div className={styles["partnership-company-logo-cards"]}>
        {companyData.map((item, index) => (
          <div className={styles["company-card"]} key={index}>
            <Image src={item} alt="image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
