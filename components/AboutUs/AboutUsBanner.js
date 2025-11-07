"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/AboutUsBanner.module.scss";
import aboutusbanner from '../../public/images/aboutusbanner.png'
import aboutusbanner_mobile from '../../public/images/aboutusbanner_mobile.png'
import Image from "next/image";

const AboutUsBanner = () => {
  return (
    <div className={styles.bannerSlider}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* ✅ Slide 1: Image with left text */}
        <SwiperSlide>
          <div className={`${styles.slide} ${styles.imageSlide}`}>
            <Image
              src={aboutusbanner}
              alt="Banner"
              className={styles.bannerImage}
            />
            <Image
              src={aboutusbanner_mobile}
              alt="Banner"
              className={styles.aboutusbanner_mobile}
            />
            <div className={`${styles.textBox} ${styles.leftText}`}>
              <h2>Largest Supplier of Wafers and Photoresists in India</h2>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Slide 2: Video with right text */}
        <SwiperSlide>
          <div className={`${styles.slide} ${styles.videoSlide}`}>
            <video
              className={styles.bannerVideo}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/aboutusbannervideo.mp4" type="video/mp4" />
            </video>
            <div className={`${styles.textBox} ${styles.rightText}`}>
              <h2>Largest Supplier of Space Grade Solar Cells</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutUsBanner;
