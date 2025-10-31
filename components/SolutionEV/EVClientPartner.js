"use client";
import styles from "../../styles/EVClientPartner.module.scss";
import evclient1 from '../../public/images/evclient1.png';
import evclient2 from '../../public/images/evclient2.png';
import semipartner1 from '../../public/images/semipartner1.png';
import semipartner2 from '../../public/images/semipartner2.png';
import Image from "next/image";

const EVClientPartner = () => {
  const companyDataOne = [evclient1,evclient2];
  const companyDataTwo = [semipartner1,semipartner2];
  return (
    <div className={styles["ev-clients-partners-section-content"]}>
      <div className={styles["client-side"]}>
        <h2>our clients</h2>
        <div className={styles["partnership-company-logo-cards"]}>
          <div className={styles["scroll-container"]}>
            <div className={styles["scroll-content"]}>
              {companyDataOne.map((item, index) => (
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
      <div className={styles["partner-side"]}>
        <h2>our Partners</h2>
        <div className={styles["partnership-company-logo-cards"]}>
          <div className={styles["scroll-container"]}>
            <div className={`${styles["scroll-content"]} ${styles["reverse"]}`}>
              {companyDataTwo.map((item, index) => (
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
    </div>
  );
};

export default EVClientPartner;
