import React from "react";
import styles from "../../styles/GetInTouch.module.scss";
import expertsimage from '../../public/images/expertsimage.png';
import Image from "next/image";
const GetInTouch = () => {
  return (
    <>
      <div className={styles["india-first-exclusive-section"]}>
        <div className={styles["india-first-exclusive-content"]}>
          <h2>India's 1st Exclusive</h2>
          <h4>Clean Room with state of the art equipment</h4>
          <p>
            GMS-India is proud to present over 4000 sq/ft of in-house clean
            rooms for all your prototyping and testing needs, equipped with
            state-of-the-art equipment and designed to adhere to FS209E Class 8
            and ISO Class 3 standards, ensuring we deliver the best value to our
            customers.
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
                <Image src={expertsimage} alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
