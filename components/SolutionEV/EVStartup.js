"use client";
import React, { useRef } from "react";
import styles from "../../styles/EVStartup.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const EVStartup = () => {
  const swiperRef = useRef(null);
  const evCardData = [
    {
      title: "DESIGN",
      details:
        "Review your product designs by our team of industry experts. Get the design reviewed for scaling up and fix and issue that were overseen",
    },
    {
      title: "DEVELOP",
      details:
        "With the help of our in-house expertise and our global network of partners, develop your designs to cater to all the specifications you want the end product ot achieve.",
    },
    {
      title: "PROTOTYPE",
      details:
        "Optimise your designs by developing and testing prototypes in our well equipped lab with the help of our team of well trained technicians.",
    },
    {
      title: "PRODUCTION",
      details:
        "From proof of concepts to full scale production, plan, partner and develop a production strategy to meet your startup's business goals.",
    },
        {
      title: "DESIGN",
      details:
        "Review your product designs by our team of industry experts. Get the design reviewed for scaling up and fix and issue that were overseen",
    },
    {
      title: "DEVELOP",
      details:
        "With the help of our in-house expertise and our global network of partners, develop your designs to cater to all the specifications you want the end product ot achieve.",
    },
    {
      title: "PROTOTYPE",
      details:
        "Optimise your designs by developing and testing prototypes in our well equipped lab with the help of our team of well trained technicians.",
    },
    {
      title: "PRODUCTION",
      details:
        "From proof of concepts to full scale production, plan, partner and develop a production strategy to meet your startup's business goals.",
    },
  ];
  return (
    <div className={styles["ev-startup-section"]}>
        <h2>Are you a startup ? Then our GMS ACCELERATE Program is for YOU!</h2>
        <div className={styles["ev-startup-all-cards"]}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            spaceBetween={20}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
               pauseOnMouseEnter: false,
            }}
            modules={[Autoplay]}
          >
            {evCardData.map((item, index) => (
              <SwiperSlide key={index} className={styles["evstartup-card"]}>             
                  <h4>{item.title}</h4>
                  <p>{item.details}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  );
};

export default EVStartup;
