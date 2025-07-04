/* components/Testimonials.tsx */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Testimonials.module.scss";
import drimage from "../../public/images/drimage.png";
import dot from "../../public/images/dot.png";

const testimonials = [
  {
    icon: dot,
    spanp:
      "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal:
      "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
  {
    icon: dot,
    spanp:
      "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal:
      "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
  {
    icon: dot,
    spanp:
      "“Having a partner in a fast‑changing environment who keeps their promises even though there’s major disruption is super valuable,",
    normal:
      "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: drimage,
  },
  {
    icon: dot,
    spanp: "“Having a partner in a even per valuable,",
    normal:
      "and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr.",
    title: "COO, Digital",
    image: drimage,
  },
];

const Testimonials = () => {
  // ───────────────────────────────────────────────
  // 1️⃣ Which testimonial is currently shown?
  // ───────────────────────────────────────────────
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((i) => (i + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const item = testimonials[index];

  // Optional: % completed for the little progress line
  const progress = ((index + 1) / testimonials.length) * 100;

  return (
    <div className={styles["testimonial-page-content"]}>
      <h2>Testimonials</h2>

      {/* ───────────────── Main card ───────────────── */}
      <div className={styles["testinomial-card-content"]}>
        <div className={styles["main-contnet-details"]}>
          <Image src={item.icon} alt="decorative dot" />
          <h5>
            <span>{item.spanp}</span> {item.normal}
          </h5>

          <div className={styles["dr-image-details"]}>
            <div className={styles["dr-image"]}>
              <Image src={item.image} alt={item.name} />
            </div>
            <div className={styles["details-dr"]}>
              <h6>{item.name}</h6>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────── Arrows + progress ──────────────── */}
      <div className={styles["arrow-buttons-and-progress-line"]}>
        <div className={styles["arrow-buttons"]}>
          <button onClick={handlePrev}>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.57994 10.3198L10.6566 3.04733C10.7149 2.98872 10.7609 2.91914 10.7921 2.84261C10.8233 2.76609 10.839 2.68414 10.8383 2.6015C10.8377 2.51886 10.8206 2.43718 10.7881 2.36118C10.7557 2.28518 10.7085 2.21638 10.6492 2.15875C10.59 2.10112 10.5199 2.0558 10.4431 2.02543C10.3662 1.99506 10.2841 1.98023 10.2015 1.9818C10.1188 1.98338 10.0374 2.00132 9.96171 2.0346C9.88606 2.06787 9.81777 2.11582 9.76077 2.17566L2.26077 9.884C2.14726 10.0007 2.08374 10.157 2.08374 10.3198C2.08374 10.4826 2.14726 10.639 2.26077 10.7557L9.76077 18.464C9.81777 18.5238 9.88606 18.5718 9.96171 18.6051C10.0374 18.6383 10.1188 18.6563 10.2015 18.6579C10.2841 18.6594 10.3662 18.6446 10.4431 18.6142C10.5199 18.5839 10.59 18.5385 10.6492 18.4809C10.7085 18.4233 10.7557 18.3545 10.7881 18.2785C10.8206 18.2025 10.8377 18.1208 10.8383 18.0382C10.839 17.9555 10.8233 17.8736 10.7921 17.797C10.7609 17.7205 10.7149 17.6509 10.6566 17.5923L3.57994 10.3198Z"
                fill="black"
              />
            </svg>
          </button>
          <button onClick={handleNext}>
            <svg
              width="9"
              height="18"
              viewBox="0 0 9 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.42006 9.31983L0.343393 2.04733C0.28513 1.98872 0.239068 1.91914 0.207873 1.84261C0.176678 1.76609 0.160968 1.68414 0.161654 1.6015C0.162341 1.51886 0.17941 1.43718 0.211872 1.36118C0.244334 1.28518 0.291546 1.21638 0.350775 1.15875C0.410004 1.10112 0.480074 1.0558 0.556931 1.02543C0.633787 0.995058 0.715906 0.98023 0.798532 0.981803C0.881157 0.983376 0.962649 1.00132 1.03829 1.0346C1.11394 1.06787 1.18223 1.11582 1.23923 1.17566L8.73923 8.884C8.85274 9.00067 8.91626 9.15704 8.91626 9.31983C8.91626 9.48262 8.85274 9.63898 8.73923 9.75566L1.23923 17.464C1.18223 17.5238 1.11394 17.5718 1.03829 17.6051C0.962649 17.6383 0.881157 17.6563 0.798532 17.6579C0.715906 17.6594 0.633787 17.6446 0.556931 17.6142C0.480074 17.5839 0.410004 17.5385 0.350775 17.4809C0.291546 17.4233 0.244334 17.3545 0.211872 17.2785C0.17941 17.2025 0.162341 17.1208 0.161654 17.0382C0.160968 16.9555 0.176678 16.8736 0.207873 16.797C0.239068 16.7205 0.28513 16.6509 0.343393 16.5923L7.42006 9.31983Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* ─────────────── Progress line ─────────────── */}
        <div className={styles["progressline-div"]}>
          <div className={styles["progress-line"]}>
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`${styles["progress-bar"]} ${
                  i === index ? styles["active"] : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;