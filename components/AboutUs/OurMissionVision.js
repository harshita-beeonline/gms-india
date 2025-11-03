"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import styles from "../../styles/OurMissionVision.module.scss";
import missionimage from "../../public/images/missionimage.png";
import visionimage from "../../public/images/visionimage.png";
import Image from "next/image";

const OurMissionVision = () => {
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={styles["our-mission-vision-section"]}>
      <div className={styles["our-mission-vision-text-card"]}>
        <h2>Our Mission & Vision</h2>
        <div
          ref={missionRef}
          className={`${styles["mission-card"]} ${
            missionInView ? "animate__animated animate__fadeInRight" : ""
          }`}
        >
          <div className={styles["circle-image"]}>
            <div className={styles["mission-card-image"]}>
              <Image src={missionimage} alt="Mission" />
            </div>
          </div>
          <div className={styles["mission-card-text"]}>
            <h6>Mission</h6>
            <p>
              To design, develop and deliver innovative technology-driven
              solutions that will accelerate research & development and address
              the low-to-high volume requirements of the country's advanced
              microelectronic sector.
            </p>
          </div>
        </div>
      </div>

      <div className={styles["our-mission-vision-text-card"]}>
        <div
          ref={visionRef}
          className={`${styles["vision-card"]} ${
            visionInView ? "animate__animated animate__fadeInLeft" : ""
          }`}
        >
          <div className={styles["mission-card-text"]}>
            <h6>Vision</h6>
            <p>
              GMS aims to be a key contributor to India’s technological growth,
              driven by quality, customer service, and global partnerships,
              bringing cutting-edge products and services to the Indian market.
            </p>
          </div>
          <div className={styles["circle-image"]}>
            <div className={styles["mission-card-image"]}>
              <Image src={visionimage} alt="Vision" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionVision;
