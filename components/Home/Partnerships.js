"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/Partnerships.module.scss";
import partner1 from "../../public/images/partner1.png";
import partner2 from "../../public/images/partner2.png";
import partner3 from "../../public/images/partner3.png";
import partner4 from "../../public/images/partner4.png";
import partner5 from "../../public/images/partner5.png";
import partner6 from "../../public/images/partner6.png";
import partner7 from "../../public/images/partner7.png";
import partner8 from "../../public/images/partner8.png";
import partner9 from "../../public/images/partner9.png";
import partner10 from "../../public/images/partner10.png";
import partner11 from "../../public/images/partner11.png";
import partner12 from "../../public/images/partner12.png";
import partner13 from "../../public/images/partner13.png";
import partner14 from "../../public/images/partner14.png";
import partner15 from "../../public/images/partner15.png";
import partner16 from "../../public/images/partner16.png";
import partner17 from "../../public/images/partner17.png";
import partner18 from "../../public/images/partner18.png";
import partner19 from "../../public/images/partner19.png";
import partner20 from "../../public/images/partner20.png";
import partner21 from "../../public/images/partner21.png";
import partner22 from "../../public/images/partner22.png";
import partner23 from "../../public/images/partner23.png";
import partner24 from "../../public/images/partner24.png";
import partner25 from "../../public/images/partner25.png";
import partner26 from "../../public/images/partner26.png";
import partner27 from "../../public/images/partner27.png";
import partner28 from "../../public/images/partner28.png";
import partner29 from "../../public/images/partner29.png";
import partner30 from "../../public/images/partner30.png";
import partner31 from "../../public/images/partner31.png";
import partner32 from "../../public/images/partner32.png";
import partner33 from "../../public/images/partner33.png";
import partner34 from "../../public/images/partner34.png";
import partner35 from "../../public/images/partner35.png";
import partner36 from "../../public/images/partner36.png";
import partner37 from "../../public/images/partner37.png";
import partner38 from "../../public/images/partner38.png";
import partner39 from "../../public/images/partner39.png";
import partner40 from "../../public/images/partner40.png";
import partner41 from "../../public/images/partner41.png";
import partner42 from "../../public/images/partner42.png";
import partner43 from "../../public/images/partner43.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ import Autoplay module
import "swiper/css";
import "swiper/css/autoplay";

const Partnerships = () => {
  const companyDataOne = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
    partner15,
    partner16,
    partner17,
    partner18,
    partner19,
    partner20,
  ];
  const companyDataTwo = [
    partner21,
    partner22,
    partner23,
    partner24,
    partner25,
    partner26,
    partner27,
    partner28,
    partner29,
    partner30,
    partner31,
    partner32,
    partner33,
    partner34,
    partner35,
    partner36,
    partner37,
    partner38,
    partner39,
    partner40,
    partner41,
    partner42,
    partner43,
  ];
  const swiperRef = useRef(null);
  const handlePause = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };
  const handleResume = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };
  return (
    <div className={styles["partnership-section-content"]}>
      <h2>Powered by Partnerships</h2>
      <div className={styles["partnership-company-logo-cards"]}>
        <div className={styles["scroll-container"]}>
          <div className={styles["scroll-content"]}>
          {companyDataOne.concat(companyDataOne).map((item, index) => (
            <div className={styles["company-card"]} key={index}>
              <div className={styles["main-image-box"]}>
                <Image src={item} alt="image" />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className={styles["partnership-company-logo-cards"]}>
        <div className={styles["scroll-container"]}>
          <div className={`${styles["scroll-content"]} ${styles["reverse"]}`}>
            {companyDataTwo.concat(companyDataTwo).map((item, index) => (
              <div className={styles["company-card"]} key={index}>
                <div className={styles["main-image-box"]}>
                  <Image src={item} alt="image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partnerships;
{
  /* <div className={styles["partnership-company-logo-cards"]}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1000, // 2.5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
        >
          {companyDataOne.map((item, index) => (
            <SwiperSlide
              className={styles["company-card"]}
              key={index}
              onMouseEnter={handlePause}
              onClick={handlePause}
              onMouseLeave={handleResume}
            >
              <div className={styles["main-image-box"]}>
                <Image src={item} alt="image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles["partnership-company-logo-cards"]}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1000, // 2.5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
        >
          {companyDataTwo.map((item, index) => (
            <SwiperSlide
              className={styles["company-card"]}
              key={index}
              onMouseEnter={handlePause}
              onClick={handlePause}
              onMouseLeave={handleResume}
            >
              <div className={styles["main-image-box"]}>
                <Image src={item} alt="image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */
}
