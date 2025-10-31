"use client";
import styles from "../../styles/SolarClientPartner.module.scss";
import semiclient3 from "../../public/images/semiclient3.png";
import solarpartner1 from "../../public/images/solarpartner1.png";
import Image from "next/image";

const SolarClientsPartners = () => {
  return (
    <div className={styles["solar-clients-partners-section-content"]}>
      <div className={styles["client-side"]}>
        <h2>our clients</h2>
        <div className={styles["partnership-company-logo-cards"]}>
          <div className={styles["scroll-container"]}>
            <div className={styles["scroll-content"]}>
                <div className={styles["company-card"]}>
                  <div className={styles["main-image-box"]}>
                    <Image src={semiclient3} alt="image" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div  className={styles["partner-side"]}>
        <h2>our Partners</h2>
        <div className={styles["partnership-company-logo-cards"]}>
          <div className={styles["scroll-container"]}>
            <div className={`${styles["scroll-content"]} ${styles["reverse"]}`}>
                <div className={styles["company-card"]}>
                  <div className={styles["main-image-box"]}>
                    <Image src={solarpartner1} alt="image" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SolarClientsPartners;
