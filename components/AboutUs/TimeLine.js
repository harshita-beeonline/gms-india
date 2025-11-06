"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/TimeLine.module.scss";

import Established from "../../public/images/2001_icon.svg";
import Cpu from "../../public/images/2003_icon.svg";
import Sun from "../../public/images/2009_icon.svg";
import Gauge from "../../public/images/2018_icon.svg";
import New_Office from "../../public/images/2020_icon.svg";
import Cleanroom from "../../public/images/2022_icon.svg";
import Business from "../../public/images/2025_icon.svg";

const timelineEvents = [
  { year: 2001, title: "Established", icon: Established, description: "Focus was semiconductor materials and equipment" },
  { year: 2003, title: "MEMS Equipment", icon: Cpu, description: "Received 1st order for MEMS Equipment from Department of Space" },
  { year: 2009, title: "Space Solar", icon: Sun, description: "Received Largest Order for Space Grade Solar Cells from department of Space worth 10M USD" },
  { year: 2018, title: "EV Business", icon: Gauge, description: "Received 1st Order for Wire Bonders from a Private Company" },
  { year: 2020, title: "New Office", icon: New_Office, description: "Moved into bigger office space" },
  { year: 2022, title: "Cleanroom", icon: Cleanroom, description: "Setup facility with Lithography, assembly and packaging for prototyping, demonstration and Skill development" },
  { year: 2025, title: "Cleanroom & Utilities Business", icon: Business, description: "Diversified into a new segment" },
];

// Duplicate data to simulate infinite scrolling
const infiniteEvents = [...timelineEvents, ...timelineEvents, ...timelineEvents];

export default function Timeline() {
  const [active, setActive] = useState(timelineEvents.length); // Start from middle copy
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);

  // Center active element
  const centerActive = (i) => {
    const scroller = scrollerRef.current;
    const node = itemRefs.current[i];
    if (!scroller || !node) return;
    const left = node.offsetLeft - scroller.offsetWidth / 2 + node.offsetWidth / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  };

  // Auto-scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite looping
  useEffect(() => {
    if (active >= infiniteEvents.length - timelineEvents.length) {
      setTimeout(() => {
        setActive(timelineEvents.length); // reset to middle copy smoothly
        const scroller = scrollerRef.current;
        if (scroller) {
          const node = itemRefs.current[timelineEvents.length];
          const left = node.offsetLeft - scroller.offsetWidth / 2 + node.offsetWidth / 2;
          scroller.scrollTo({ left, behavior: "instant" });
        }
      }, 400);
    }
  }, [active]);

  useEffect(() => {
    centerActive(active);
  }, [active]);

  const selected = infiniteEvents[active % timelineEvents.length];

  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineContainer}>
        <div className={styles.track} aria-hidden />

        <div ref={scrollerRef} className={styles.scroller} role="tablist" aria-label="Company timeline">
          {infiniteEvents.map((e, i) => (
            <div
              key={`${e.year}-${i}`}
              ref={(el) => (itemRefs.current[i] = el)}
              className={`${styles.item} ${active === i ? styles.itemActive : ""}`}
            >
              <div className={styles.labels}>
                <div className={`${styles.title} ${active === i ? styles.activeLabel : ""}`}>{e.title}</div>
                <div className={`${styles.year} ${active === i ? styles.activeYear : ""}`}>{e.year}</div>
              </div>

              <button
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
              />
            </div>
          ))}
        </div>

        <motion.div
          key={selected.year}
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className={styles.cardInner}>
            <div className={styles.iconWrap}>
              <Image src={selected.icon} alt={selected.title} width={60} height={60} className={styles.timelineIcon} />
            </div>
            <h3 className={styles.cardTitle}>{selected.title}</h3>
            <p className={styles.cardDesc}>{selected.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
