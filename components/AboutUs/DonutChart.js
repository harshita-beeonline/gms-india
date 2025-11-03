// "use client";
// import React from "react";
// import styles from "../../styles/DonutChart.module.scss";
// import Image from "next/image";
// import donut1 from "../../public/images/donut1.svg";
// import donut2 from "../../public/images/donut2.svg";
// import donut3 from "../../public/images/donut3.svg";
// import donut4 from "../../public/images/donut4.svg";
// import donut5 from "../../public/images/donut5.svg";
// import donut6 from "../../public/images/donut6.svg";
// import donutcard1 from "../../public/images/donutcard1.svg";
// import donutcard2 from "../../public/images/donutcard2.svg";
// import donutcard3 from "../../public/images/donutcard3.svg";
// import donutcard4 from "../../public/images/donutcard4.svg";
// import donutcard5 from "../../public/images/donutcard5.svg";
// import donutcard6 from "../../public/images/donutcard6.svg";

// const DonutChart = () => {
//   // Starting from top-left (Brand Advocacy) and going clockwise
//   const segments = [
//     {
//       label: "Bonding Advocacy",
//       color: "#93A7FF",
//       icon: donut6,
//     },
//     {
//       label: "Awareness",
//       color: "#04176B",
//       icon: donut1,
//     },
//     {
//       label: "Engagement",
//       color: "#031E98",
//       icon: donut2,
//     },
//     {
//       label: "Evaluation",
//       color: "#2641B9",
//       icon: donut3,
//     },
//     {
//       label: "Purchase",
//       color: "#4360E0",
//       icon: donut4,
//     },
//     {
//       label: "Product & Support Experience",
//       color: "#627EFC",
//       icon: donut5,
//     },
//   ];
//   const cx = 50;
//   const cy = 50;
//   const radius = 36;
//   const strokeWidth = 24;
//   const dashArray = 2 * Math.PI * radius;
//   const startAngle = -80; // Start from top-left
//   const sliceAngle = 360 / segments.length;
//   const donutCardsData = [
//     {
//       icon: donutcard1,
//       title: "Awareness",
//       details:
//         "Showcasing cutting-edge semiconductor solutions to build visibility and trust.",
//     },
//     {
//       icon: donutcard2,
//       title: "Engagement",
//       details: "Connecting through demos, training, and industry events.",
//     },
//     {
//       icon: donutcard3,
//       title: "Evaluation",
//       details: "Recommending tailored solutions backed by application support.",
//     },
//     {
//       icon: donutcard4,
//       title: "Purchase",
//       details: "Ensuring smooth procurement with reliable global partnerships.",
//     },
//     {
//       icon: donutcard5,
//       title: "Product & Support Experience",
//       details: "Delivering end-to-end service, training, and maintenance.",
//     },
//     {
//       icon: donutcard6,
//       title: "Bonding / Advocacy",
//       details:
//         " Building lasting partnerships that turn customers into advocates.",
//     },
//   ];
//   return (
//     <>
//       <div className={styles["donut-circle-section"]}>
//         <div className={styles.donutChart}>
//           <svg viewBox="0 0 100 100" className={styles.donutSvg}>
//             {segments.map((item, index) => {
//               const offset = dashArray * (1 - 1 / segments.length);
//               const angle = startAngle + index * sliceAngle;
//               return (
//                 <circle
//                   key={index}
//                   cx={cx}
//                   cy={cy}
//                   r={radius}
//                   fill="transparent"
//                   stroke={item.color}
//                   strokeWidth={strokeWidth}
//                   strokeDasharray={dashArray}
//                   strokeDashoffset={offset}
//                   transform={`rotate(${angle} ${cx} ${cy})`}
//                 />
//               );
//             })}
//           </svg>

//           <div className={styles.centerHole}></div>

//           <div className={styles.iconsContainer}>
//             {segments.map((item, index) => {
//               const angle = (index * 360) / segments.length - 140;
//               const rad = (angle * Math.PI) / 180;
//               const x = 50 + Math.cos(rad) * 36;
//               const y = 50 + Math.sin(rad) * 36;

//               return (
//                 <div
//                   key={index}
//                   className={styles.iconWrapper}
//                   style={{
//                     top: `${y}%`,
//                     left: `${x}%`,
//                   }}
//                 >
//                   <div className={styles.icon}>
//                     <Image src={item.icon} alt="svg" />
//                   </div>
//                   <div className={styles.label}>{item.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div className={styles["all-cards-of-donut"]}>
//         {donutCardsData.map((item, index) => (
//           <div className={styles["donut-card"]} key={index}>
//             <div className={styles["card-icon-title"]}>
//               <div className={styles["card-icon"]}>
//                 <Image src={item.icon} alt="img" />
//               </div>
//               <h4>{item.title}</h4>
//             </div>
//             <p>{item.details}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default DonutChart;
"use client";
import React, { useState } from "react";
import styles from "../../styles/DonutChart.module.scss";
import Image from "next/image";
import donut1 from "../../public/images/donut1.svg";
import donut2 from "../../public/images/donut2.svg";
import donut3 from "../../public/images/donut3.svg";
import donut4 from "../../public/images/donut4.svg";
import donut5 from "../../public/images/donut5.svg";
import donut6 from "../../public/images/donut6.svg";
import donutcard1 from "../../public/images/donutcard1.svg";
import donutcard2 from "../../public/images/donutcard2.svg";
import donutcard3 from "../../public/images/donutcard3.svg";
import donutcard4 from "../../public/images/donutcard4.svg";
import donutcard5 from "../../public/images/donutcard5.svg";
import donutcard6 from "../../public/images/donutcard6.svg";

const DonutChart = () => {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const segments = [
    {
      label: "Bonding Advocacy",
      color: "#93A7FF",
      icon: donut6,
    },
    {
      label: "Awareness",
      color: "#04176B",
      icon: donut1,
    },
    {
      label: "Engagement",
      color: "#031E98",
      icon: donut2,
    },
    {
      label: "Evaluation",
      color: "#2641B9",
      icon: donut3,
    },
    {
      label: "Purchase",
      color: "#4360E0",
      icon: donut4,
    },
    {
      label: "Product & Support Experience",
      color: "#627EFC",
      icon: donut5,
    },
  ];

  const cx = 50;
  const cy = 50;
  const radius = 36;
  const strokeWidth = 24;
  const hoverStrokeWidth = 28;
  const hoverRadius = 36;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -80;
  const sliceAngle = 360 / segments.length;

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
      icon: donutcard3,
      title: "Evaluation",
      details: "Recommending tailored solutions backed by application support.",
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
      icon: donutcard6,
      title: "Bonding / Advocacy",
      details:
        "Building lasting partnerships that turn customers into advocates.",
    },
  ];

  return (
    <>
      <div className={styles["donut-circle-section"]}>
        <div className={styles.donutChart}>
          <svg viewBox="0 0 100 100" className={styles.donutSvg}>
            {segments.map((item, index) => {
              const offset = dashArray * (1 - 1 / segments.length);
              const angle = startAngle + index * sliceAngle;
              const isHovered = hoveredSegment === index;
              const currentRadius = isHovered ? hoverRadius : radius;
              const currentStrokeWidth = isHovered ? hoverStrokeWidth : strokeWidth;

              return (
                <g key={index}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={currentRadius}
                    fill="transparent"
                    stroke={item.color}
                    strokeWidth={currentStrokeWidth}
                    strokeDasharray={dashArray}
                    strokeDashoffset={offset}
                    transform={`rotate(${angle} ${cx} ${cy})`}
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      filter: isHovered ? "brightness(1.15)" : "brightness(1)",
                    }}
                  />
                  {isHovered && (
                    <g
                      transform={`rotate(${angle} ${cx} ${cy})`}
                      style={{
                        pointerEvents: "none",
                      }}
                    >
                      <circle
                        cx={cx}
                        cy={cy}
                        r={currentRadius}
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth={currentStrokeWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={offset}
                      />
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          <div className={styles.centerHole}></div>

          <div className={styles.iconsContainer}>
            {segments.map((item, index) => {
              const angle = (index * 360) / segments.length - 140;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * 36;
              const y = 50 + Math.sin(rad) * 36;
              const isHovered = hoveredSegment === index;

              return (
                <div
                  key={index}
                  className={styles.iconWrapper}
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                  }}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div
                    className={styles.icon}
                  >
                    <Image src={item.icon} alt="svg" />
                  </div>
                  {isHovered && (
                    <div
                      className={styles.label}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles["all-cards-of-donut"]}>
        {donutCardsData.map((item, index) => (
          <div className={styles["donut-card"]} key={index}>
            <div className={styles["card-icon-title"]}>
              <div className={styles["card-icon"]}>
                <Image src={item.icon} alt="img" />
              </div>
              <h4>{item.title}</h4>
            </div>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DonutChart;