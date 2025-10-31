import React from "react";
import styles from "../../styles/GetInTouch.module.scss";
import expertsimage from "../../public/images/expertsimage.png";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <>
      <div className={styles["india-first-exclusive-section"]}>
        <div className={styles["india-first-exclusive-content"]}>
          <h2>State-of-the-art SOLAR CELLS</h2>
          <h4>
            Offer high effciences, small temperature coeffcients and excellent
            Power to Mass Ratio
          </h4>
          <p>
            Introducing our State-Of-The-Art 1500sq ft Lithography facility. The
            lab will take care of stages starting from designing to prototyping
            and testing. The non-destructive analysis will be conducted using
            these setups to ensure results to spec..
          </p>
          <button>Talk to Our Expert</button>
        </div>
      </div>
      <div className={styles["getin-touch-section"]}>
        <div className={styles["getin-touch-left-right-part"]}>
          <div className={styles["getin-touch-left-part"]}>
            <h2>Get in touch with our experts!</h2>
            <div className={styles["details-and-button"]}>
              <p>
                Welcome to Global Marketing Services (GMS). We are a leading
                solution provider based out of Bangalore, offering a wide range
                of equipment, individual components, and materials for EV
                Batteries, PCB's, Thin Films, Semiconductors, Microelectronics,
                MEMS, LED, and Solar applications for device manufacturing and
                research organizations in India. Over the years, GMS has been a
                part of various prestigious projects in India, which has
                resulted in our team gaining significant experience and exposure
                to some of the best semiconductor technologies, products, and
                processes.
              </p>
              <button>Let’s Connect</button>
            </div>
          </div>
          <div className={styles["getin-touch-right-part"]}>
            <div className={styles["experts-image"]}>
              <Image src={expertsimage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
