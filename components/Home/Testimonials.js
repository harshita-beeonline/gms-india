"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/Testimonials.module.scss";

import drimage from "../../public/images/drimage.png";
import dot from "../../public/images/dot.png";

/* ───────── Test data ───────── */
const testimonials = [
  {
    icon: dot,
    spanp: "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal: "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
  {
    icon: dot,
    spanp: "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal: "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
  {
    icon: dot,
    spanp: "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal: "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
  {
    icon: dot,
    spanp: "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal: "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef(null);
  const AUTO_DELAY = 4000;

  const handleSlide = () => {
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + direction;

      if (nextIndex >= testimonials.length) {
        setDirection(-1); // reverse to backward
        nextIndex = prevIndex - 1;
      } else if (nextIndex < 0) {
        setDirection(1); // reverse to forward
        nextIndex = prevIndex + 1;
      }

      return nextIndex;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(handleSlide, AUTO_DELAY);

    return () => clearInterval(timerRef.current);
  }, [direction, index]);

  return (
    <section className={styles["testimonial-page-content"]}>
      <h2>Testimonials</h2>

      {/* ───────── Slide Window ───────── */}
      <div className={styles["slider-window"]}>
        <div
          className={styles["slider-track"]}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className={styles["testinomial-card-content"]} key={i}>
              <Image src={t.icon} alt="dot" className={styles.dot} />
              <h5>
                <span>{t.spanp}</span> {t.normal}
              </h5>
              <div className={styles["dr-image-details"]}>
                <div className={styles["dr-image"]}>
                  <Image src={t.image} alt={t.name} />
                </div>
                <div className={styles["details-dr"]}>
                  <h6>{t.name}</h6>
                  <p>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── Arrows + progress ───────── */}
      <div className={styles["arrow-buttons-and-progress-line"]}>
        <div className={styles["arrow-buttons"]}>
          <button onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="currentColor">
              <path d="M3.58 10.32 10.66 3.05a.8.8 0 0 0-1.12-1.14L1.96 9.62a.76.76 0 0 0 0 1.07l7.58 7.71a.8.8 0 0 0 1.12-1.14L3.58 10.32Z" />
            </svg>
          </button>

          <button onClick={handleNext} aria-label="Next testimonial">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="currentColor">
              <path d="M16.42 10.32 9.34 18.03a.8.8 0 0 0 1.12 1.14l7.58-7.71a.76.76 0 0 0 0-1.07l-7.58-7.71a.8.8 0 1 0-1.12 1.14l7.08 7.5Z" />
            </svg>
          </button>
        </div>

        <div className={styles["progressline-div"]}>
          <div className={styles["progress-line"]}>
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`${styles["progress-bar"]} ${
                  i === index ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}