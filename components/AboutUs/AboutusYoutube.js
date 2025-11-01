import React from "react";
import styles from "../../styles/AboutusYoutube.module.scss";

const AboutusYoutube = () => {
  return (
    <div className={styles["aboutus-youtube-section"]}>
                          <h2>About Us</h2>
      <div className={styles["aboutus-left-right-content-part"]}>
        <div className={styles["aboutus-left-content-part"]}>
          <p>
            Founded in 2001 in Bengaluru, Global Marketing Solutions (GMS) is a
            trusted partner in semiconductor equipment, device manufacturing,
            and research solutions. With more than two decades of expertise and
            a highly qualified team, we provide a one-stop shop for
            comprehensive R&D and production support—from concept and
            prototyping to agile, low-high volume production.
          </p>
          <p>
            Our solutions are trusted by leading institutions such as Tata
            Electronics, CG Semi, OLA, Ather, IITs, ISRO, DRDO, DAE, CSIR, and
            Bharat Electronics (BEL), along with many global industry leaders.
            By consistently adopting the latest technologies and strengthening
            our supply chain, we have enabled customers across micro- and
            nanotechnology sectors to achieve their business objectives.
          </p>
          <p>
            At GMS, we are committed to delivering innovative, turnkey solutions
            that empower startups, researchers, production centres and
            enterprises to stay ahead in a rapidly evolving industry.
          </p>
        </div>
        <div className={styles["aboutus-right-content-part"]}>
          <div className={styles["video-wrapper"]}>
            <iframe
              src="https://www.youtube.com/embed/MjQcQLrxmwM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusYoutube;
