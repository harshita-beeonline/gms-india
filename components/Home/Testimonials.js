"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/Testimonials.module.scss";

const testimonials = [
  {
    quote:
      "Having a partner in a fast-changing environment who keeps their promises even though there’s major disruption is super valuable, and HCLTech always stood up to their promises and played a major role for us.",
    name: "Dr. Victoria Ossadnik",
    title: "COO, Digital and Member of the Board of Management of E.ON",
    image: "/images/person1.jpg",
  },
  {
    quote:
      "HCLTech proved to be a reliable partner during our digital transformation journey, delivering consistently on time and on quality.",
    name: "John Smith",
    title: "CTO, Global Energy Inc.",
    image: "/images/person2.jpg",
  },
  {
    quote:
      "Working with HCLTech has been an enriching experience. They understood our needs deeply and added tremendous value.",
    name: "Maria Garcia",
    title: "Chief Innovation Officer, TechStart",
    image: "/images/person3.jpg",
  },
  {
    quote:
      "Our collaboration with HCLTech transformed the way we work. Their commitment and expertise made all the difference.",
    name: "Tom Lee",
    title: "VP Operations, FinGrow",
    image: "/images/person4.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className={styles["testimonial-page-content"]}>
      <h2>Testimonials</h2>
    </div>
  );
};

export default Testimonials;
