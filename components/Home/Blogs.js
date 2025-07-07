"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/Blogs.module.scss";
import Image from "next/image";
import blogone from "../../public/images/blogone.png";
import blogtwo from "../../public/images/blogtwo.png";
import blogthree from "../../public/images/blogthree.png";

const cardData = [
  {
    img: blogone,
    source: "Moneycontrol",
    date: "April 23, 2025",
    title: "Get the GMS Edge",
  },
  {
    img: blogtwo,
    source: "Business Standard",
    date: "April 22, 2025",
    title:
      "How to effectively adapt your manufacturing process to a new battery bonding energy?",
  },
  {
    img: blogthree,
    source: "Economic Times",
    date: "April 17, 2025",
    title: "Upgrade from Welding",
  },
  {
    img: blogtwo,
    source: "Business Standard",
    date: "April 22, 2025",
    title:
      "How to effectively adapt your manufacturing process to a new battery bonding energy?",
  },
  {
    img: blogthree,
    source: "Economic Times",
    date: "April 17, 2025",
    title: "Upgrade from Welding",
  },
  {
    img: blogone,
    source: "Moneycontrol",
    date: "April 23, 2025",
    title: "Get the GMS Edge",
  },
  {
    img: blogtwo,
    source: "Business Standard",
    date: "April 22, 2025",
    title:
      "How to effectively adapt your manufacturing process to a new battery bonding energy?",
  },
];

const Blogs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className={styles["blog-page-contnet"]}>
      <h2>Latest Blogs</h2>
      <div className={styles.sliderWrapper}>
        {navigationReady && (
          <Swiper
            modules={[Navigation, Autoplay]} // ✅ Include Autoplay module
            breakpoints={{
              0: {
                // 0 – 434 px  ➜  1 full + ½ next card
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              435: {
                // ≥ 435 px   ➜  2 full + ½ next card
                slidesPerView: 2.5,
                spaceBetween: 28,
              },
              992: {
                // ≥ 992 px   ➜  3 full + ½ next card (your old 3.5)
                slidesPerView: 3.5,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 2000, // ✅ Auto slide every 3 seconds
              disableOnInteraction: false, // ✅ Keeps autoplay on after manual navigation
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <Image
                    src={card.img}
                    alt="Card Image"
                    className={styles.image}
                  />
                  <div className={styles.cardText}>
                    <p className={styles.source}>
                      {card.source} | {card.date}
                    </p>
                    <h3>{card.title}</h3>
                    <button className={styles.readMore}>Read More →</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* ✅ Custom Arrows */}
        <div className={styles.arrowWrapper}>
          <button ref={prevRef} className={styles.navBtn}>
            ←
          </button>
          <button ref={nextRef} className={styles.navBtn}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
