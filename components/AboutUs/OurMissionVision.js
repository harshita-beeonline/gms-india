"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/OurMissionVision.module.scss";
import missionimage from "../../public/images/missionimage.png";
import visionimage from "../../public/images/visionimage.png";
import Image from "next/image";

// 🔵 Mission card (slides in from right)
const missionCardVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0, // starts immediately
    },
  },
};

// 🔴 Vision card (slides in from left, 1s after Mission)
const visionCardVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 1, // starts 1s after mission
    },
  },
};

// ✨ Text for Mission (2s after Mission card starts)
const missionTextVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
      delay: 2, // appears 2s after mission card
    },
  },
};

// ✨ Text for Vision (2s after Vision card starts)
const visionTextVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
      delay: 3, // appears 2s after vision (which starts 1s later)
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
          <div className={styles["circle-image"]}>
            <div className={styles["mission-card-image"]}>
              <Image src={missionimage} alt="Mission" />
            </div>
          </div>

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
