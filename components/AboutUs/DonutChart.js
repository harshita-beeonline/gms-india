"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/DonutChart.module.scss";
import Image from "next/image";

// Donut icons
import donut1 from "../../public/images/donut1.png";
import donut2 from "../../public/images/donut2.png";
import donut3 from "../../public/images/donut3.png";
import donut4 from "../../public/images/donut4.png";
import donut5 from "../../public/images/donut5.png";
import donut6 from "../../public/images/donut6.png";

// Card icons
import donutcard1 from "../../public/images/donutcard1.svg";
import donutcard2 from "../../public/images/donutcard2.svg";
import donutcard3 from "../../public/images/donutcard3.svg";
import donutcard4 from "../../public/images/donutcard4.svg";
import donutcard5 from "../../public/images/donutcard5.svg";
import donutcard6 from "../../public/images/donutcard6.svg";

const SEGMENTS = [
  {
    key: "advocacy",
    label: "Bonding Advocacy",
    color: "#93A7FF",
    icon: donut6,
  },
  { key: "awareness", label: "Awareness", color: "#04176B", icon: donut1 },
  { key: "engagement", label: "Engagement", color: "#031E98", icon: donut2 },
  { key: "evaluation", label: "Evaluation", color: "#2641B9", icon: donut3 },
  { key: "purchase", label: "Purchase", color: "#4360E0", icon: donut4 },
  {
    key: "experience",
    label: "Product & Support Experience",
    color: "#627EFC",
    icon: donut5,
  },
];

const CARDS = [
  {
    key: "awareness",
    icon: donutcard1,
    title: "Awareness",
    details:
      "Showcasing cutting-edge semiconductor solutions to build visibility and trust.",
  },
  {
    key: "engagement",
    icon: donutcard2,
    title: "Engagement",
    details: "Connecting through demos, training, and industry events.",
  },
  {
    key: "purchase",
    icon: donutcard4,
    title: "Purchase",
    details: "Ensuring smooth procurement with reliable global partnerships.",
  },
  {
    key: "experience",
    icon: donutcard5,
    title: "Product & Support Experience",
    details: "Delivering end-to-end service, training, and maintenance.",
  },
  {
    key: "evaluation",
    icon: donutcard3,
    title: "Evaluation",
    details: "Recommending tailored solutions backed by application support.",
  },
  {
    key: "advocacy",
    icon: donutcard6,
    title: "Bonding / Advocacy",
    details:
      "Building lasting partnerships that turn customers into advocates.",
  },
];

const DonutChart = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotation logic (fixed version)
  useEffect(() => {
    let index = 0;
    let intervalId = null;
    let timeoutId = null;

    const startAutoRotate = () => {
      // Prevent multiple intervals
      if (intervalId) clearInterval(intervalId);

      intervalId = setInterval(() => {
        setActiveKey((prevKey) => {
          const prevIndex = SEGMENTS.findIndex((s) => s.key === prevKey);
          index = prevIndex === -1 ? 0 : (prevIndex + 1) % SEGMENTS.length;
          return SEGMENTS[index].key;
        });
      }, 2000);
    };

    const stopAutoRotate = () => {
      clearInterval(intervalId);
      intervalId = null;
    };

    const pauseRotation = () => {
      stopAutoRotate();
      // Restart after delay — clear any old timeouts first
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        startAutoRotate();
      }, 2000);
    };

    // Start initial auto rotation
    startAutoRotate();

    // Handle manual hover/click interruption
    const allInteractiveElements = document.querySelectorAll(
      `.${styles.iconItem}, .${styles.card}`
    );
    allInteractiveElements.forEach((el) => {
      el.addEventListener("mouseenter", pauseRotation);
      el.addEventListener("click", pauseRotation);
    });

    // Cleanup on unmount
    return () => {
      stopAutoRotate();
      clearTimeout(timeoutId);
      allInteractiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", pauseRotation);
        el.removeEventListener("click", pauseRotation);
      });
    };
  }, []);

  // Donut geometry
  const cx = 50,
    cy = 50,
    radius = 36,
    strokeWidth = 24,
    dashArray = 2 * Math.PI * radius,
    startAngle = -80,
    sliceAngle = 360 / SEGMENTS.length;

  return (
    <section className={styles.donutMain}>
      {/* LEFT: Donut */}
      <div className={styles.donutLeft}>
        <svg viewBox="0 0 100 100" className={styles.donutSvg}>
          {SEGMENTS.map((seg, i) => {
            const offset = dashArray * (1 - 1 / SEGMENTS.length);
            const angle = startAngle + i * sliceAngle;
            const isActive = activeKey === seg.key;

            return (
              <circle
                key={seg.key}
                cx={cx}
                cy={cy}
                r={radius}
                fill="transparent"
                stroke={seg.color}
                strokeWidth={isActive ? strokeWidth + 3 : strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={offset}
                transform={`rotate(${angle} ${cx} ${cy})`}
                onMouseEnter={() => !isMobile && setActiveKey(seg.key)}
                onMouseLeave={() => !isMobile && setActiveKey(null)}
                onClick={() => isMobile && setActiveKey(seg.key)}
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
          {SEGMENTS.map((seg, i) => {
            const angle = (i * 360) / SEGMENTS.length - 140;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 36;
            const y = 50 + Math.sin(rad) * 36;
            const isActive = activeKey === seg.key;

            return (
              <div
                key={seg.key}
                className={`${styles.iconItem} ${
                  isActive ? styles.active : ""
                }`}
                style={{ top: `${y}%`, left: `${x}%` }}
                onMouseEnter={() => !isMobile && setActiveKey(seg.key)}
                onMouseLeave={() => !isMobile && setActiveKey(null)}
                onClick={() => isMobile && setActiveKey(seg.key)}
              >
                <Image src={seg.icon} alt={seg.label} />
                {isActive && (
                  <span className={styles.iconLabel}>{seg.label}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Cards */}
      <div className={styles.donutRight}>
        <div className={styles.cardsGrid}>
          {CARDS.map((card) => {
            const isActive = activeKey === card.key;
            return (
              <div
                key={card.key}
                className={`${styles.card} ${
                  isActive ? styles.activeCard : ""
                }`}
                onMouseEnter={() => !isMobile && setActiveKey(card.key)}
                onMouseLeave={() => !isMobile && setActiveKey(null)}
                onClick={() => isMobile && setActiveKey(card.key)}
              >
                <div className={styles.cardHeader}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    height={78}
                    width={78}
                  />
                  <h4>{card.title}</h4>
                </div>
                <p>{card.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonutChart;
