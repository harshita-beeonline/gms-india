"use client";
import React, { useState } from "react";
import styles from "../../styles/CoreDomain.module.scss";

const CoreDomain = () => {
  const tabs = [
    {
      id: "efficiency",
      label: "OPTIMIZED EFFICIENCY",
      content:
        "Managing new tech and next-gen systems can be an enduring difficulty for optimization. While our team of specialists develop ways to address this challenge for improved performance, companies can concentrate on other innovative challenges and growth opportunities. To stay competitive, there is a pressing need to develop practices and solutions that can keep costs low and create reliable improvements for success.",
    },
    {
      id: "reliability",
      label: "ASSURED RELIABILITY",
      content:
        "Emerging technology places a lot of emphasis on reliability. We have been offering our clients dependable tools and infrastructure for more than 20 years, ranging from simple instruments to cutting-edge machinery that has significantly improved management and productivity.",
    },
    {
      id: "output",
      label: "MAXIMIZED OUTPUT",
      content:
        "We are stepping up to meet the market's pressing need for trustworthy suppliers and work diligently to provide solutions that satisfy your needs and, on occasions, even maximize them.",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // default active: first tab

  return (
    <div className={styles["core-domain-section"]}>
      <div className={styles["core-domain-content"]}>
        <h2>our core domain experience advantage</h2>
        <div className={styles["core-domain-details-tab"]}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? styles.active : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <p key={tab.id} className={styles["tab-content"]}>
                {tab.content}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default CoreDomain;
