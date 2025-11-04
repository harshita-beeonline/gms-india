"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Cpu, Sun, Gauge, Building2, Droplet, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../../styles/TimeLine.module.scss";

const timelineEvents = [
  { year: 2001, title: "Established", icon: Building2, description: "Focus was semiconductor materials and equipment" },
  { year: 2003, title: "MEMS Equipment", icon: Cpu, description: "Received 1st order for MEMS Equipment from Department of Space" },
  { year: 2009, title: "Space Solar", icon: Sun, description: "Received Largest Order for Space Grade Solar Cells from department of Space worth 10M USD" },
  { year: 2018, title: "EV Business", icon: Gauge, description: "Received 1st Order for Wire Bonders from a Private Company" },
  { year: 2020, title: "New Office", icon: Building2, description: "Moved into bigger office space" },
  { year: 2022, title: "Cleanroom", icon: Droplet, description: "Setup facility with Lithography, assembly and packaging for prototyping, demonstration and Skill development" },
  { year: 2025, title: "Cleanroom & Utilities Business", icon: Leaf, description: "Diversified into a new segment" },
];

export default function Timeline() {
  const [active, setActive] = useState(3);
  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);

  // Center active item in the horizontal scroller
  const centerActive = (i) => {
    const scroller = scrollerRef.current;
    const node = itemRefs.current[i];
    if (!scroller || !node) return;
    const left = node.offsetLeft - scroller.offsetWidth / 2 + node.offsetWidth / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  };

  // Initial center
  useLayoutEffect(() => {
    centerActive(active);
  }, []);

  // Recenter when active changes
  useEffect(() => {
    centerActive(active);
  }, [active]);

  // Optional autoplay (disable by commenting out)
  // Respects reduced motion preference
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let i = active;
    const id = setInterval(() => {
      i = (i + 1) % timelineEvents.length;
      setActive(i);
    }, 4000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selected = timelineEvents[active];
  const Icon = selected.icon;

  // Keyboard nav (left/right arrows) for accessibility
  const onKeyNav = (e) => {
    if (e.key === "ArrowRight") setActive((a) => (a + 1) % timelineEvents.length);
    if (e.key === "ArrowLeft")
      setActive((a) => (a - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineContainer}>
        {/* Blue track line (absolute, behind dots) */}
        <div className={styles.track} aria-hidden />

        {/* Dots + labels */}
        <div
          ref={scrollerRef}
          className={styles.scroller}
          role="tablist"
          aria-label="Company timeline"
          onKeyDown={onKeyNav}
        >
          {timelineEvents.map((e, i) => (
            <div
              key={e.year}
              ref={(el) => (itemRefs.current[i] = el)}
              className={styles.item}
            >
              <div className={styles.labels}>
                <div className={styles.title}>{e.title}</div>
                <div className={styles.year}>{e.year}</div>
              </div>

              {/* Dot perfectly centered on the line */}
              <button
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`timeline-panel-${e.year}`}
                tabIndex={active === i ? 0 : -1}
                className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
              />
            </div>
          ))}
        </div>

        {/* Centered card (fixed under the line) */}
        <motion.div
          key={selected.year}
          id={`timeline-panel-${selected.year}`}
          role="tabpanel"
          aria-labelledby=""
          className={styles.card}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className={styles.cardInner}>
            <div className={styles.iconWrap}>
              <Icon size={44} strokeWidth={1.6} />
            </div>
            <h3 className={styles.cardTitle}>{selected.title}</h3>
            <p className={styles.cardDesc}>{selected.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
