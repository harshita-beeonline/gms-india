"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/RelatedProduct.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ import Autoplay module
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import product1 from "../../public/images/product1.png";
import product2 from "../../public/images/product2.png";
import product3 from "../../public/images/product3.png";
const RelatedProduct = () => {
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
  const RelatedCardData = [
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product2,
      name: "Preferred Float Zone Silicon Wafers",
      details:
        "Float Zone-Preferred Float Zone(FZ-PFZ) silicon wafer has the lowest resist..",
    },
    {
      link: "/main-product",
      image: product3,
      name: "Float Zone Silicon Wafers",
      details:
        "Most power electronics devices are manufactured using float zone wafers for...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product2,
      name: "Preferred Float Zone Silicon Wafers",
      details:
        "Float Zone-Preferred Float Zone(FZ-PFZ) silicon wafer has the lowest resist..",
    },
    {
      link: "/main-product",
      image: product3,
      name: "Float Zone Silicon Wafers",
      details:
        "Most power electronics devices are manufactured using float zone wafers for...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
    {
      link: "/main-product",
      image: product2,
      name: "Preferred Float Zone Silicon Wafers",
      details:
        "Float Zone-Preferred Float Zone(FZ-PFZ) silicon wafer has the lowest resist..",
    },
    {
      link: "/main-product",
      image: product3,
      name: "Float Zone Silicon Wafers",
      details:
        "Most power electronics devices are manufactured using float zone wafers for...",
    },
    {
      link: "/main-product",
      image: product1,
      name: "SR300Photo Voltaic Float Zone Silicon wafer0",
      details:
        "Photo Voltaic Float Zone(PV-FZ) silicon wafers have High minority carrier ...",
    },
  ];
  return (
    <div className={styles["related-all-products-section"]}>
      <h2>Related Products</h2>
      <div className={styles["related-product-cards"]}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2000, // 2.5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
        >
          {RelatedCardData.map((item, index) => (
            <SwiperSlide
              key={index}
              className={styles["related-card"]}
              onMouseEnter={handlePause}
              onClick={handlePause}
              onMouseLeave={handleResume}
            >
              <Link href={item.link} key={index}>
                  <div className={styles["product-image"]}>
                    <Image src={item.image} alt="image" />
                  </div>
                  <h5>{item.name}</h5>
                  <p>{item.details}</p>
                  <button className={styles["view-product-btn"]}>
                    View Product
                  </button>
                  <button className={styles["add-cart-btn"]}>
                    Add to Cart
                  </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default RelatedProduct;
