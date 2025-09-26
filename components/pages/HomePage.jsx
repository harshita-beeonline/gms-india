"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";
import { usePathname } from "next/navigation";
import OGP from "../OGP";
import { getAsset } from "../utils";

const HomePage = ({ testimonials = [], hero }) => {
  const pathname = usePathname();
  const [verified, setVerified] = useState(false);

  /** 19-01-2025 start */
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission temporarily
    const form = event.target;

    if (verified) {
      // If CAPTCHA is verified, display success message and submit the form
      setShowSuccessMessage(true); // Show success message
      setTimeout(() => {
        form.submit(); // Submit the form after showing the success message
      }, 500); // Add a slight delay for better UX (optional)
    } else {
      alert("Please complete the CAPTCHA verification.");
    }
  };
  /** 19-01-2025 end */

  return (
    <div className="w-full font-text overflow-x-hidden scroll-smooth">
      <OGP title="Home" image="" />
      <div className="relative w-full overflow-x-clip overflow-y-clip min-h-[100vh] bg-black">
        {/* VIDEO HERO */}
        {hero?.video?.id ? (
          <video
            autoPlay
            muted
            loop
            className="object-fill w-full min-h-[80vh]"
            poster={hero?.image?.id ? getAsset(hero.image.id) : undefined} // Set poster image
          >
            <source src={getAsset(hero.video.id)} type="video/mp4" />
          </video>
        ) : (
          hero?.image?.id ? <img alt="" src={getAsset(hero.image.id)} /> : null
        )}

        {/* VIDEO OVERLAY ELEMENT */}
        <div className="w-full overflow-x-clip absolute top-0 py-auto mt-4 lg:my-8 min-h-[70vh]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.7,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.7,
                },
              },
            }}
            className="lg:container mx-auto my-6 h-auto"
          >
            <div className="lg:mx-32 mx-5 rounded-lg py-8 px-6 lg:px-20 bg-opacity-60 bg-black border border-white">
              <h1 className="text-4xl text-white text-center font-bold font-chianti">
                DESIGN. INNOVATE. LAUNCH
              </h1>
              <h2 className="text-2xl text-white mt-4 text-center">
                Accelerate your Next-Gen Product needs with our Time-tested And
                Proven Microelectronics And Semiconductor Solutions.
              </h2>
              <p className="mt-4 text-gray-400 text-center text-lg ">
                AEROSPACE / DEFENCE / HEALTHCARE / TELECOMMUNICATIONS /
                TRANSPORTATION / COMPUTING / MOBILE / SOLAR / IOT / EV
              </p>
              <div className="px-auto flex justify-center mt-5">
                <Link
                  href="#contact"
                  className="rounded-full px-8 py-2 text-white inline-block mx-auto bg-gms"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
          <div className="mx-auto text-center h-auto lg:block hidden">
            <Link href="/search" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-white inline mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              Search products
            </Link>
          </div>
          <div className="mt-4 lg:flex lg:flex-row flex-col gap-y-3 justify-between lg:gap-x-6 lg:container mx-auto px-4 lg:px-32 hidden">
            <Link
              href="/category/components"
              className="rounded-lg bg-black bg-opacity-70 px-8 py-5 border border-white lg:w-1/3 text-center"
            >
              <motion.svg
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.7,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                    },
                  },
                }}
                className="fill-current h-44 text-gray-700 mx-auto cursor-pointer hover:text-gray-300"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path d="M10 4c0-1.1-.89-2-2-2s-2 .9-2 2v8H2v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H18v4zM2 32c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H2v4zm40-20V4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4zM26 4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H34v4z" />
              </motion.svg>
              <p className="text-white text-3xl uppercase mt-2"> components</p>
            </Link>
            <Link
              href="/category/equipment"
              className="rounded-lg bg-black bg-opacity-70 px-8 py-5 border border-white lg:w-1/3 text-center"
            >
              <motion.svg
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.7,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                    },
                  },
                }}
                className="fill-current h-44 text-gray-700 mx-auto cursor-pointer hover:text-gray-300"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 52 52"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect height={8} width={24} x={14} y={22} />
                <path d="M15,17v18h22V17H15z M33.0005493,31.0010376h-14v-2h14V31.0010376z M33.0005493,27.0010376h-14v-2h14V27.0010376z   M33.0005493,23.0010376h-14v-2h14V23.0010376z" />
                <path d="M5,13v26h7.9990234v-8.0009766h26V39H47V13H5z M11,18H9v-2h2V18z M17.9394531,18H13v-2h4.9394531V18z" />
              </motion.svg>
              <p className="text-white text-3xl uppercase mt-2"> equipment</p>
            </Link>
            <Link
              href="/category/materials"
              className="rounded-lg bg-black bg-opacity-70 px-8 py-5 border border-white lg:w-1/3 text-center"
            >
              <motion.svg
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.7,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                    },
                  },
                }}
                className="fill-current h-44 text-gray-700 mx-auto cursor-pointer hover:text-gray-300"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M31.414,9.677l-5.08-5.081C25.959,4.221,25.449,4.01,24.92,4.01H7.081  c-0.53,0-1.039,0.211-1.414,0.586l-5.08,5.081C0.194,10.069-0.002,10.586,0,11.104c0.003,0.47,0.171,0.939,0.506,1.316  l13.999,14.908C14.885,27.756,15.429,28,16,28c0.571,0,1.115-0.244,1.494-0.672l14-14.908c0.342-0.385,0.51-0.867,0.506-1.348  C31.996,10.566,31.799,10.062,31.414,9.677z M18.219,11.01H13.78L16,9.161L18.219,11.01z M16.782,8.51l2.732-2.278l2.018,2.018  L19,10.359L16.782,8.51z M13,10.359L10.468,8.25l2.018-2.018l2.733,2.278L13,10.359z M18.49,12.01L16,24.463L13.51,12.01H18.49z   M19.51,12.01h4.906l-7.359,12.269L19.51,12.01z M19.779,11.01l2.463-2.051l2.051,2.051H19.779z M20.707,6.01h3.512l-1.916,1.597  L20.707,6.01z M16,7.86l-2.22-1.85h4.438L16,7.86z M9.696,7.607L7.78,6.01h3.513L9.696,7.607z M9.758,8.959l2.462,2.051H7.707  L9.758,8.959z M12.49,12.01l2.453,12.269L7.583,12.01H12.49z M12.704,22.488L2.864,12.01h3.554L12.704,22.488z M25.582,12.01h3.555  l-9.842,10.48L25.582,12.01z M25.707,11.01l-2.693-2.693l2.297-1.915l4.607,4.608H25.707z M6.686,6.4l2.301,1.917L6.293,11.01H2.006  L6.686,6.4z"
                  id="diamond"
                />
              </motion.svg>
              <p className="text-white text-3xl uppercase mt-2"> materials</p>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ background: `linear-gradient(45deg, #0d0f13, #26448c)` }}>
        <div className="lg:container mx-auto pt-20 pb-10 lg:px-6 flex lg:flex-row flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
              translateX: 0,
            }}
            className="lg:w-3/4 px-4"
          >
            <h3 className="text-5xl text-white font-bold font-chianti">
              World-Class Research and Manufacturing Solutions.
            </h3>
            <p className="text-lg mt-3 text-white">
              SPECIFICALLY CURATED FOR YOUR PRODUCTS, AT YOUR PRICE.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 text-white mt-4 gap-x-3 lg:gap-x-5 gap-y-3 lg:gap-y-5">
              <div className="col-span-1">
                <p className="text-3xl uppercase font-bold">
                  20+ <br /> experience
                </p>
                <p>20+ years of Experience</p>
              </div>

              <div className="col-span-1">
                <p className="text-3xl uppercase font-bold">
                  300+ <br /> clients
                </p>
                <p>
                  Loyal and happy customers across a wide range of global
                  industries.
                </p>
              </div>

              <div className="col-span-1">
                <p className="text-3xl uppercase font-bold">
                  10+ <br /> INDUSTRIES
                </p>
                <p>
                  Including Defence, Aerospace, Telecommunications,
                  Transportation, Comuting, Mobile, Solar, IOT, EV.
                </p>
              </div>

              <div className="col-span-1">
                <p className="text-3xl uppercase font-bold">
                  20+ <br /> COUNTRIES
                </p>
                <p>
                  Spanning the European, North American, Indo-Parcific & Middle
                  Eastern regions
                </p>
              </div>

              <div className="col-span-1">
                <p className="text-3xl uppercase font-bold">
                  1000+ <br /> SOLUTIONS
                </p>
                <p>Promptly Executed, On-Time Deliveries.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6 },
              translateX: 0,
            }}
            className="py-10 px-3 lg:px-0 lg:py-20"
          >
            <img
              src="https://gms-44a3.s3.amazonaws.com/static/home-2/images/connected-world.png"
              alt="World connected by GMS"
            />
          </motion.div>
        </div>
      </div>

      <div className="lg:container mx-auto py-10 border-b border-gray-300 px-10">
        <h2 className="text-gms text-5xl font-bold text-center font-chianti">
          Our Clients
        </h2>
        <img
          className="lg:block w-full mt-6 hidden"
          alt="Partners Grid"
          src={getAsset("1315a7f3-f72f-4c83-af95-c67d0c361bf4")}
        />
        <img
          className="block w-full mt-6 lg:hidden"
          alt="Partners Grid"
          src={getAsset("eb035d53-3217-4acd-b908-6880f56c3de9")}
        />
      </div>

      <div className="lg:container mx-auto py-10 lg:px-10">
        <h2 className="text-gms text-5xl font-bold text-center font-chianti">
          Our Partners
        </h2>
        <img
          className="lg:block w-full mt-6 hidden"
          alt="Partners Grid"
          src={getAsset("dedb2b68-156f-48d3-8a34-7501c7a4cb46.png")}
        />
        <img
          className="block w-full mt-6 lg:hidden"
          alt="Partners Grid"
          src={getAsset("56788b41-fff6-440d-b9e6-4502b822546d.png")}
        />
      </div>

      {/* COMITTED PARTNERS */}
      <div
        style={{
          background:
            "linear-gradient(45deg,rgba(0,0,0,.637),#3b5ba6), url(https://gms-44a3.s3.amazonaws.com/static/home-2/images/cta-bg.jpeg)",
        }}
        className="bg-center bg-cover mt-12"
      >
        <div className="lg:container mx-auto lg:p-32 p-8 py-16 flex flex-col justify-center">
          <motion.h2
            className="text-center mx-auto text-4xl text-white font-chianti"
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.6 },
            }}
          >
            At GMS, We Are Committed To Attaining Complete Product Efficacy By
            Streamlining Your Manufacturing Process.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.6 },
            }}
            className="mx-auto"
          >
            <Link
              href="/contact"
              className="bg-white text-lg text-indigo-800 rounded-xl px-3 py-2 inline-block mx-auto mt-6"
            >
              Talk to Our Experts
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="lg:container py-10 mx-auto">
        <h2 className="text-gms text-4xl lg:text-5xl font-bold text-center font-chianti">
          Our Testimonials
        </h2>
        <div className="mt-16 lg:px-24 flex flex-col lg:gap-y-32 gap-y-10">
          {testimonials.map((t, k) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: (k + 1) % 2 === 1 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { duration: 0.6 },
              }}
              key={k}
              className={`flex flex-col ${
                (k + 1) % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
              } justify-center lg:relative`}
            >
              <div
                className="bg-gms lg:rounded-xl p-4 lg:p-10 shadow-md"
                style={{ maxWidth: "500px", height: "auto" }}
              >
                <span
                  style={{ fontSize: "300px" }}
                  className="text-gray-200 absolute opacity-25 font-chianti"
                >
                  0{k + 1}
                </span>
                <p className="text-white text-3xl lg:text-4xl font-chianti">
                  {" "}
                  {t.By}{" "}
                </p>
                <p className="text-white mt-4 text-lg lg:text-xl">{t.text}</p>
              </div>
              <img
                alt=""
                className="lg:rounded-xl shadow-md block lg:relative lg:-bottom-8"
                style={{ width: "500px", height: "auto" }}
                src="https://gms-44a3.s3.amazonaws.com/static/home-2/images/client3.jpg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="bg-gms mt-20 bg-cover bg-no-repeat"
        style={{
          background: `linear-gradient(45deg,rgba(0,0,0,.637),#3b5ba6), url(${getAsset(
            "a6083738-126b-4554-ae32-6a39eebada91",
            60,
            1000
          )})`,
        }}
      >
        <div className="lg:container py-20 px-8 lg:px-40 mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
            className="text-white text-5xl font-bold text-center font-chianti"
          >
            About Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
            className="mt-10 flex flex-col gap-y-10 text-white text-lg text-center"
          >
            <p className="block">
              Welcome to Global Marketing Services (GMS). We are a leading
              solution provider based out of Bangalore, offering a wide range of
              equipment, individual components, and materials for EV Batteries,
              PCB's, Thin Films, Semiconductors, Microelectronics, MEMS, LED,
              and Solar applications for device manufacturing and research
              organizations in India. Over the years, GMS has been a part of
              various prestigious projects in India, which has resulted in our
              team gaining significant experience and exposure to some of the
              best semiconductor technologies, products, and processes.
            </p>
            <p className="block">
              We have also partnered/associated with some of the world's leading
              product manufacturers in the Micro and Nanotechnology space. We
              are offering this experise to our clients, providing the latest in
              technology, enabling them to "Make The Most Competent Choice".
            </p>
          </motion.div>
        </div>
      </div>

      <div id="contact" className="bg-slate-100">
        <div className="lg:container mx-auto p-6 flex lg:flex-row flex-col gap-y-4">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h5 className="text-3xl text-gms font-semibold text-center block">
              We are happy to answer all your questions
            </h5>
            <div className="mt-4 text-gray-600 flex flex-col gap-y-2 px-1 lg:px-10">
              <div className="p-4 rounded-md bg-white shadow-sm flex ">
                <p className="block mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 text-gms h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <p className="block text-lg">
                  3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura,
                  Bengaluru, Karnataka 560061
                </p>
              </div>
              <div className="p-4 rounded-md bg-white shadow-sm flex">
                <p className="block mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gms"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <p className="block text-lg">080 2666 5684/5</p>
              </div>
              <div className="p-4 rounded-md bg-white shadow-sm flex">
                <p className="block mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gms"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </p>
                <p className="block text-lg">info@gms-india.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-3 lg:px-10">
            <h4 className="text-gms text-4xl font-semibold">Contact Us</h4>
            {/* 19-01-2025 start  */}
            <form
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
              className="flex flex-col gap-y-3 mt-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    required
                    pattern="[A-Za-z'\s]{1,20}"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Company name can only be 20 characters long
                </p>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    pattern="^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$"
                    className="block  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="description"
                    id="description"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </div>
              <input
                id="00N7F00000Iu6TF"
                name="00N7F00000Iu6TF"
                title="Customer Segment"
                type="hidden"
                value="About Us"
              />
              <input
                id="lead_source"
                name="lead_source"
                title="Lead Source"
                type="hidden"
                value="Website"
              />
              <input
                id="00NC5000000QKdV"
                name="00NC5000000QKdV"
                type="hidden"
                value="1"
              />
              <input type="hidden" name="oid" value="00D7F000002DPId" />
              <input
                type="hidden"
                name="retURL"
                value={`https://gms-india.com${pathname}`}
              />

              {!verified && (
                <HCaptcha
                  onVerify={() => {
                    setVerified(true);
                  }}
                  sitekey="662d2fc6-49e5-47f6-b2e1-a7844a3dab7a"
                />
              )}

              {/* 19-01-2025 start  */}
              {showSuccessMessage && (
                <div className="shadow-md rounded-md bg-green-200 p-8">
                  <p className="text-2xl">
                    Enquiry has been saved. We will get back to you soon.
                  </p>
                </div>
              )}
              {/* 19-01-2025 end  */}
              <button
                className={`inline-flex items-center rounded-md border border-transparent bg-gms px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:w-1/5`}
              >
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </form>
            {/* 19-01-2025 start  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
