"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/DonutChart.module.scss";
import Image from "next/image";

// Import donut icons
import donut1 from "../../public/images/donut1.png";
import donut2 from "../../public/images/donut2.png";
import donut3 from "../../public/images/donut3.png";
import donut4 from "../../public/images/donut4.png";
import donut5 from "../../public/images/donut5.png";
import donut6 from "../../public/images/donut6.png";

import donutcard1 from "../../public/images/donutcard1.svg";
import donutcard2 from "../../public/images/donutcard2.svg";
import donutcard3 from "../../public/images/donutcard3.svg";
import donutcard4 from "../../public/images/donutcard4.svg";
import donutcard5 from "../../public/images/donutcard5.svg";
import donutcard6 from "../../public/images/donutcard6.svg";

const DonutChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const segments = [
    { label: "Bonding / Advocacy", color: "#93A7FF", icon: donut6 },
    { label: "Awareness", color: "#04176B", icon: donut1 },
    { label: "Engagement", color: "#031E98", icon: donut2 },
    { label: "Evaluation", color: "#2641B9", icon: donut3 },
    { label: "Purchase", color: "#4360E0", icon: donut4 },
    { label: "Product & Support Experience", color: "#627EFC", icon: donut5 },
  ];

  const donutCardsData = [
    {
      icon: donutcard1,
      title: "Awareness",
      details:
        "Showcasing cutting-edge semiconductor solutions to build visibility and trust.",
    },
    {
      icon: donutcard2,
      title: "Engagement",
      details: "Connecting through demos, training, and industry events.",
    },
        {
      icon: donutcard4,
      title: "Purchase",
      details: "Ensuring smooth procurement with reliable global partnerships.",
    },
        {
      icon: donutcard5,
      title: "Product & Support Experience",
      details: "Delivering end-to-end service, training, and maintenance.",
    },
    {
      icon: donutcard3,
      title: "Evaluation",
      details: "Recommending tailored solutions backed by application support.",
    },
    {
      icon: donutcard6,
      title: "Bonding / Advocacy",
      details:
        "Building lasting partnerships that turn customers into advocates.",
    },
  ];

  const cx = 50,
    cy = 50,
    radius = 36,
    strokeWidth = 24,
    dashArray = 2 * Math.PI * radius,
    startAngle = -80,
    sliceAngle = 360 / segments.length;

  return (
    <section className={styles.donutMain}>
      {/* LEFT: Donut */}
      <div className={styles.donutLeft}>
        <svg viewBox="0 0 100 100" className={styles.donutSvg}>
          {segments.map((seg, i) => {
            const offset = dashArray * (1 - 1 / segments.length);
            const angle = startAngle + i * sliceAngle;
            const isActive = activeIndex === i;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={radius}
                fill="transparent"
                stroke={seg.color}
                strokeWidth={isActive ? strokeWidth + 3 : strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={offset}
                transform={`rotate(${angle} ${cx} ${cy})`}
                onMouseEnter={() => !isMobile && setActiveIndex(i)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => isMobile && setActiveIndex(i)}
                style={{
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  filter: isActive ? "brightness(1.2)" : "brightness(1)",
                }}
              />
            );
          })}
        </svg>

        <div className={styles.iconSet}>
          {segments.map((seg, i) => {
            const angle = (i * 360) / segments.length - 140;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 36;
            const y = 50 + Math.sin(rad) * 36;
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className={`${styles.iconItem} ${isActive ? styles.active : ""}`}
                style={{ top: `${y}%`, left: `${x}%` }}
                onMouseEnter={() => !isMobile && setActiveIndex(i)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => isMobile && setActiveIndex(i)}
              >
                <Image src={seg.icon} alt={seg.label} />
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Cards */}
      <div className={styles.donutRight}>
        <div className={styles.cardsGrid}>
          {donutCardsData.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${
                activeIndex === i ? styles.activeCard : ""
              }`}
              onMouseEnter={() => !isMobile && setActiveIndex(i)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
              onClick={() => isMobile && setActiveIndex(i)}
            >
              <div className={styles.cardHeader}>
                <Image src={card.icon} alt={card.title} height={78} width={78} />
                <h4>{card.title}</h4>
              </div>
              <p>{card.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonutChart;
