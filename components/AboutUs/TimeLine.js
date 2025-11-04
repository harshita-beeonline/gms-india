// "use client";
// import React, { useState } from "react";
// import { Zap, Cpu, Sun, Gauge, Building2, Droplet, Leaf } from "lucide-react";
// import styles from "../../styles/TimeLine.module.scss";

// const Timeline = () => {
//   const timelineEvents = [
//     {
//       year: 2001,
//       title: "Established",
//       icon: Building2,
//       description: "Company founded",
//     },
//     {
//       year: 2003,
//       title: "MEMS Equipment",
//       icon: Cpu,
//       description: "Launched MEMS equipment division",
//     },
//     {
//       year: 2009,
//       title: "Space Solar",
//       icon: Sun,
//       description: "Expanded into space solar technology",
//     },
//     {
//       year: 2018,
//       title: "EV Business",
//       icon: Gauge,
//       description: "Received 1st Order for Wire Bonders from a Private Company",
//     },
//     {
//       year: 2020,
//       title: "New Office",
//       icon: Building2,
//       description: "Opened new office location",
//     },
//     {
//       year: 2022,
//       title: "Cleanroom",
//       icon: Droplet,
//       description: "Established cleanroom facility",
//     },
//     {
//       year: 2025,
//       title: "Cleanroom & Utilities Business",
//       icon: Leaf,
//       description: "Expanded utilities and cleanroom services",
//     },
//   ];
//   const [selectedIndex, setSelectedIndex] = useState(3);
//   const selectedEvent = timelineEvents[selectedIndex];
//   const SelectedIcon = selectedEvent.icon;
//   return (
//     <div className={styles.timelineSection}>
//       <div className={styles.timelineContainer}>
//         {/* Timeline Line */}
//         <div className={styles.timelineWrapper}>
//           <div className={styles.timelineLine}></div>
//           <div className={styles.timelineDots}>
//             {timelineEvents.map((event, index) => (
//               <div key={index} className={styles.timelineItem}>
//                 <button
//                   onClick={() => setSelectedIndex(index)}
//                   className={`${styles.timelineDot} ${
//                     index === selectedIndex ? styles.active : ""
//                   }`}
//                 />
//                 <div className={styles.timelineText}>
//                   <p className={styles.timelineTitle}>{event.title}</p>
//                   <p className={styles.timelineYear}>{event.year}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Dynamic Card */}
//         <div className={styles.cardContainer}>
//           <div className={styles.timelineCard}>
//             <div className={styles.iconWrapper}>
//               <div className={styles.iconBackground}>
//                 <SelectedIcon size={48} strokeWidth={1.5} />
//               </div>
//             </div>
//             <h2 className={styles.cardTitle}>{selectedEvent.title}</h2>
//             <p className={styles.cardDescription}>
//               {selectedEvent.description}
//             </p>
//             <div className={styles.cardYear}>Year: {selectedEvent.year}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Timeline;
