"use client";
import styles from "../../styles/ClientsPartners.module.scss";
import semiclient1 from "../../public/images/semiclient1.png";
import semiclient2 from "../../public/images/semiclient2.png";
import semiclient3 from "../../public/images/semiclient3.png";
import semiclient4 from "../../public/images/semiclient4.png";
import semiclient5 from "../../public/images/semiclient5.png";
import semiclient6 from "../../public/images/semiclient6.png";
import semipartner1 from "../../public/images/semipartner1.png";
import semipartner2 from "../../public/images/semipartner2.png";
import semipartner3 from "../../public/images/semipartner3.png";
import semipartner4 from "../../public/images/semipartner4.png";
import semipartner5 from "../../public/images/semipartner5.png";
import semipartner6 from "../../public/images/semipartner6.png";
import Image from "next/image";

const ClientsPartners = () => {
  const companyDataOne = [
    semiclient1,
    semiclient2,
    semiclient3,
    semiclient4,
    semiclient5,
    semiclient6,
    semiclient1,
    semiclient2,
    semiclient3,
    semiclient4,
    semiclient5,
    semiclient6,
    
  ];
  const companyDataTwo = [
    semipartner1,
    semipartner2,
    semipartner3,
    semipartner4,
    semipartner5,
    semipartner6,
    semipartner1,
    semipartner2,
    semipartner3,
    semipartner4,
    semipartner5,
    semipartner6,
  ];
  return (
    <div className={styles["clients-partners-section-content"]}>
      <h2>our clients</h2>
      <div className={styles["partnership-company-logo-cards"]}>
        <div className={styles["scroll-container"]}>
          <div className={styles["scroll-content"]}>
            {companyDataOne.concat(companyDataOne).map((item, index) => (
              <div className={styles["company-card"]} key={index}>
                <div className={styles["main-image-box"]}>
                  <Image src={item} alt="image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2>our Partners</h2>
      <div className={styles["partnership-company-logo-cards"]}>
        <div className={styles["scroll-container"]}>
          <div className={`${styles["scroll-content"]} ${styles["reverse"]}`}>
            {companyDataTwo.concat(companyDataTwo).map((item, index) => (
              <div className={styles["company-card"]} key={index}>
                <div className={styles["main-image-box"]}>
                  <Image src={item} alt="image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientsPartners;
