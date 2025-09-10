import React from "react";
import styles from "../../styles/HomeBanner.module.scss";

const HomeBanner = () => {
  return (
    <div className={styles["home-banner-content"]}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className={styles["background-video"]}>
        <source src="/images/backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className={styles["home-banner-details"]}>
        <h2>Design . Innovate . Launch</h2>
        <p>
          Accelerate your Next-Gen Product needs with our Time-tested And Proven
          Microelectronics And Semiconductor Solutions.
        </p>
        <button>
          Learn More{" "}
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75977 2.56934C8.66667 2.47624 8.55664 2.42969 8.42969 2.42969C8.30273 2.42969 8.19271 2.47624 8.09961 2.56934C8.00651 2.65397 7.95996 2.75977 7.95996 2.88672C7.95996 3.01367 8.00651 3.1237 8.09961 3.2168L11.4258 6.54297H0.457031C0.330078 6.54297 0.222168 6.5874 0.133301 6.67627C0.0444336 6.76514 0 6.87305 0 7C0 7.12695 0.0444336 7.23486 0.133301 7.32373C0.222168 7.4126 0.330078 7.45703 0.457031 7.45703H11.4258L8.09961 10.7832C8.00651 10.8678 7.95996 10.9757 7.95996 11.1069C7.95996 11.2381 8.00651 11.346 8.09961 11.4307C8.19271 11.5238 8.30273 11.5703 8.42969 11.5703C8.55664 11.5703 8.66667 11.5238 8.75977 11.4307L12.8604 7.33008C12.9535 7.23698 13 7.12695 13 7C13 6.87305 12.9535 6.76302 12.8604 6.66992L8.75977 2.56934Z"
              fill="#3B5BA6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
