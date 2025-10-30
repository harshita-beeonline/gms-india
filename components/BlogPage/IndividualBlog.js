import React from "react";
import styles from "../../styles/IndividualBlog.module.scss";
import blog1 from "../../public/images/blog1.png";
import Image from "next/image";
import introblog1 from "../../public/images/introblog1.png";
import introblog2 from "../../public/images/introblog2.png";
const text1 = `The semiconductor industry relies on various types of wafers as base materials for
manufacturing integrated circuits and other electronic components. As India aims to establish
itself in the global semiconductor manufacturing landscape, choosing the right wafer segment
for focused development is crucial. This analysis examines different wafer types and identifies
strategic opportunities for India's semiconductor manufacturing initiatives.`;
const IndividualBlog = () => {
  return (
    <div className={styles["individual-blog-section"]}>
      <div className={styles["individual-blog-banner-part"]}>
        <div className={styles["banner-left-right-part"]}>
          <div className={styles["banner-left-part"]}>
            <div className={styles["banner-left-image"]}>
              <Image src={blog1} alt="image" />
            </div>
          </div>
          <div className={styles["banner-right-part"]}>
            <h6>Featured Blog</h6>
            <div className={styles["other-details"]}>
              <div className={styles["cirle-div"]}></div>
              <h5 className={styles["divider"]}>Talan Curtis</h5>
              <h5>18 September 2025</h5>
            </div>
            <h2>
              Semiconductor Wafer Types and Strategic Manufacturing
              Opportunities for India
            </h2>
          </div>
        </div>
      </div>
      <div className={styles["individual-blog-introduction-part"]}>
        <div className={styles["introduction-left-right-part"]}>
          <div className={styles["introduction-left-part"]}>
            <h5>Introduction</h5>
            <h6>Major Wafer Types and Applications</h6>
            <h6>Recommended Focus Areas for India</h6>
            <h6>Implementation Strategy</h6>
            <h6>Conclusion</h6>
          </div>
          <div className={styles["introduction-right-part"]}>
            <h4>Introduction</h4>
            <p>{text1}</p>
            <h4>Major Wafer Types and Applications</h4>
            <h5>Silicon Wafers</h5>
            <p>
              Silicon remains the most widely used semiconductor material,
              accounting for over 95% of the semiconductor wafer market. Key
              characteristics include:
            </p>
            <li>Excellent electrical properties and stability</li>
            <li>Well-established manufacturing processes</li>
            <li>Cost-effective production at scale</li>
            <li>
              Used in mainstream computing, memory, and consumer electronics
            </li>
            <h5>Gallium Arsenide (GaAs)</h5>
            <p>
              GaAs wafers offer superior electronic properties for specific
              applications:
            </p>
            <li>Higher electron mobility than silicon</li>
            <li>Better performance in high-frequency applications</li>
            <li>Essential for RF devices and optoelectronics</li>
            <li>Used in 5G infrastructure, mobile devices, and aerospace</li>
            <h5>Silicon Carbide (SiC)</h5>
            <p>SiC wafers are increasingly important for power electronics:</p>
            <li>High thermal conductivity and breakdown voltage</li>
            <li>Excellent performance in high-temperature environments</li>
            <li>Critical for electric vehicles and renewable energy systems</li>
            <li>Growing demand in industrial and automotive sectors</li>
            <h5>Gallium Nitride (GaN)</h5>
            <p>GaN wafers are crucial for next-generation electronics:</p>
            <li>Superior high-frequency performance</li>
            <li>High power density capabilities</li>
            <li>Used in LED manufacturing and power electronics</li>
            <li>Essential for 5G/6G infrastructure and electric vehicles</li>
            <h5>Other Specialty Wafers</h5>
            <li>
              Indium Phosphide (InP): Used in high-speed optical communications
            </li>
            <li>High power density capabilities</li>
            <li>Germanium: Applications in solar cells and infrared optics</li>
            <li>Sapphire: Used as a substrate for LED manufacturing</li>
            <div className={styles["intro-blog-image"]}>
              <div className={styles["intro-blog-main-image"]}>
                <Image src={introblog1} alt="img" />
              </div>
            </div>
            <h4>Strategic Analysis for India's Manufacturing Focus</h4>
            <h3>Market Opportunity Assessment</h3>
            <ol style={{ listStyleType: "decimal" }}>
              <li>Silicon Wafers</li>
            </ol>
            <li className={styles["other-list-data"]}>Pros:</li>
            <ol
              style={{ listStyleType: "decimal" }}
              className={styles["order-list-data"]}
            >
              <li>Largest market size and established demand</li>
              <li>Well-understood technology</li>
            </ol>
            <li className={styles["other-list-data"]}>Cons:</li>
            <ol
              style={{ listStyleType: "decimal" }}
              className={styles["order-list-data"]}
            >
              <li>Highly competitive market with established players</li>
              <li>Significant capital requirements</li>
              <li>Complex technology barriers to entry</li>
            </ol>

            <ol style={{ listStyleType: "decimal" }}>
              <li>Compound Semiconductors (GaAs, SiC, GaN)</li>
            </ol>
            <li className={styles["other-list-data"]}>Pros:</li>
            <ol
              style={{ listStyleType: "decimal" }}
              className={styles["order-list-data"]}
            >
              <li>Growing market with higher margins</li>
              <li>Less established competition</li>
              <li>Alignment with emerging technologies</li>
            </ol>
            <li className={styles["other-list-data"]}>Cons:</li>
            <ol
              style={{ listStyleType: "decimal" }}
              className={styles["order-list-data"]}
            >
              <li>Smaller market size</li>
              <li>Complex manufacturing processes</li>
              <li>Higher technical expertise requirements</li>
            </ol>
            <div className={styles["intro-blog-image"]}>
              <div className={styles["intro-blog-main-image2"]}>
                <Image src={introblog2} alt="img" />
              </div>
            </div>
            <h4>Recommended Focus Areas for India</h4>
            <h5>
              Based on market dynamics and India's capabilities, the following
              segments offer promising opportunities:
            </h5>
            <ol style={{ listStyleType: "decimal" }}>
              <li>Silicon Carbide (SiC) Wafers</li>
            </ol>
            <li>Strong alignment with India's electric vehicle initiatives</li>
            <li>Growing global demand with supply constraints</li>
            <li>Potential for integration with renewable energy sector</li>
            <li>
              Lower initial capital requirements compared to silicon wafers
            </li>
            <ol style={{ listStyleType: "decimal" }}>
              <li>Gallium Arsenide (GaAs) Wafers</li>
            </ol>
            <li>Essential for 5G/6G infrastructure development</li>
            <li>Synergy with India's strong telecommunications sector</li>
            <li>Export opportunities in mobile device components</li>
            <li>Established technical expertise in related fields</li>
            <h4>Implementation Strategy</h4>
            <h5>Short-term (1-3 years)</h5>
            <li>Establish pilot facilities for SiC wafer manufacturing</li>
            <li>
              Develop technical expertise through international partnerships
            </li>
            <li>Focus on smaller diameter wafers initially</li>
            <li>Build quality control systems and certification processes</li>
            <h5>Medium-term (3-5 years)</h5>
            <li>Scale up production capabilities</li>
            <li>Expand into GaAs wafer manufacturing</li>
            <li>Develop local supply chain ecosystem</li>
            <li>Invest in research and development facilities</li>
            <h5>Long-term (5+ years)</h5>
            <li>Consider expansion into silicon wafer manufacturing</li>
            <li>Develop advanced manufacturing capabilities</li>
            <li>Establish global market presence</li>
            <li>Focus on innovation and new materials development</li>
            <h4>Conclusion</h4>
            <p>
              India should initially focus on SiC and GaAs wafer manufacturing
              rather than attempting to compete in the mainstream silicon wafer
              market. This approach offers several advantages:
            </p>
            <li>Excellent electrical properties and stability</li>
            <li>Well-established manufacturing processes</li>
            <li>Cost-effective production at scale</li>
            <li>
              Used in mainstream computing, memory, and consumer electronics
            </li>
            <p>
              Success in these segments can provide the foundation for future
              expansion into other wafer types while building India's
              semiconductor manufacturing capabilities and ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
