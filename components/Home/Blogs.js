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
import "animate.css"; // ✅ Import animate.css
import { useInView } from "react-intersection-observer"; 
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
  const { ref, inView } = useInView({
    triggerOnce: false, // animate each time
    threshold: 0.2,
  });
  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <div className={styles["blog-page-contnet"]} ref={ref}>
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
                <div     className={`${styles["card"]} ${
                    inView ? "animate__animated animate__fadeInUp" : ""
                  }`}
                  style={{
                    animationDelay: inView ? `${index * 0.5}s` : "0s",
                  }}>
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
                    <button className={styles.readMore}>
                      Read More{" "}
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75977 2.88916C8.66667 2.79606 8.55664 2.74951 8.42969 2.74951C8.30273 2.74951 8.19271 2.79606 8.09961 2.88916C8.00651 2.9738 7.95996 3.07959 7.95996 3.20654C7.95996 3.3335 8.00651 3.44352 8.09961 3.53662L11.4258 6.86279H0.457031C0.330078 6.86279 0.222168 6.90723 0.133301 6.99609C0.0444336 7.08496 0 7.19287 0 7.31982C0 7.44678 0.0444336 7.55469 0.133301 7.64355C0.222168 7.73242 0.330078 7.77686 0.457031 7.77686H11.4258L8.09961 11.103C8.00651 11.1877 7.95996 11.2956 7.95996 11.4268C7.95996 11.5579 8.00651 11.6659 8.09961 11.7505C8.19271 11.8436 8.30273 11.8901 8.42969 11.8901C8.55664 11.8901 8.66667 11.8436 8.75977 11.7505L12.8604 7.6499C12.9535 7.5568 13 7.44678 13 7.31982C13 7.19287 12.9535 7.08285 12.8604 6.98975L8.75977 2.88916Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* ✅ Custom Arrows */}
        <div className={styles.arrowWrapper}>
          <button ref={prevRef} className={styles.navBtn}>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="currentColor">
              <path d="M3.58 10.32 10.66 3.05a.8.8 0 0 0-1.12-1.14L1.96 9.62a.76.76 0 0 0 0 1.07l7.58 7.71a.8.8 0 0 0 1.12-1.14L3.58 10.32Z" />
            </svg>
          </button>
          <button ref={nextRef} className={styles.navBtn}>
             <svg width="20" height="21" viewBox="0 0 20 21" fill="currentColor">
              <path d="M16.42 10.32 9.34 18.03a.8.8 0 0 0 1.12 1.14l7.58-7.71a.76.76 0 0 0 0-1.07l-7.58-7.71a.8.8 0 1 0-1.12 1.14l7.08 7.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
