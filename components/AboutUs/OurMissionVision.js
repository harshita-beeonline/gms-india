"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/OurMissionVision.module.scss";
import missionimage from "../../public/images/missionimage.png";
import visionimage from "../../public/images/visionimage.png";
import Image from "next/image";

// 🟦 Mission card → slides in from right
const missionCardVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// 🟥 Vision card → slides in from left
const visionCardVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ✨ Mission text → from right (same direction as its card)
const missionTextVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 1.2, // appears right after both cards
    },
  },
};

// ✨ Vision text → from left (same direction as its card)
const visionTextVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 1.2, // same delay as mission text
    },
  },
};

const OurMissionVision = () => {
  return (
    <div className={styles["our-mission-vision-section"]}>
      <div className={styles["our-mission-vision-text-card"]}>
        <h2>Our Mission & Vision</h2>

        {/* 🟦 Mission Card */}
        <motion.div
          className={styles["mission-card"]}
          variants={missionCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image */}
          <div className={styles["circle-image"]}>
            <div className={styles["mission-card-image"]}>
              <Image src={missionimage} alt="Mission" />
            </div>
          </div>

          {/* Text */}
          <motion.div
            className={styles["mission-card-text"]}
            variants={missionTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h6>Mission</h6>
            <p>
              To design, develop and deliver innovative technology-driven
              solutions that will accelerate research & development and address
              the low-to-high volume requirements of the country's advanced
              microelectronic sector.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 🟥 Vision Card */}
      <div className={styles["our-mission-vision-text-card"]}>
        <motion.div
          className={styles["vision-card"]}
          variants={visionCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text */}
          <motion.div
            className={styles["mission-card-text"]}
            variants={visionTextVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h6>Vision</h6>
            <p>
              GMS aims to be a key contributor to India’s technological growth,
              driven by quality, customer service, and global partnerships,
              bringing cutting-edge products and services to the Indian market.
            </p>
          </motion.div>

          {/* Image */}
          <div className={styles["circle-image"]}>
            <div className={styles["mission-card-image"]}>
              <Image src={visionimage} alt="Vision" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMissionVision;
