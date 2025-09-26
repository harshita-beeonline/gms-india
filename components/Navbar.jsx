"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppStore } from "../store";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const appStore = useAppStore();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="w-full flex lg:justify-between lg:px-14 px-3 py-2 sticky top-0 h-20 overflow-x-clip bg-white z-50 shadow-md">
        <div className="lg:flex hidden">
          <div className="logo-container mr-10 lg:block hidden">
            <Link href="/">
              <img
                className="h-16"
                alt="GMS logo"
                src="https://gms-44a3.s3.amazonaws.com/static/home-2/images/logo.png"
              />
            </Link>
          </div>
          <div className="flex relative justify-evenly py-auto gap-x-10">
            <div className="my-auto hover:text-gms group">
              <p className="uppercase text-2xl text-gray-600 hover:text-gms">
                company
              </p>
              <div className="hidden absolute bg-white -mb-8 group-hover:block text-lg text-gray-700 uppercase">
                <Link
                  href="/company"
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  About us
                </Link>
                {/* <Link
                                href="/edge"
                                className='block hover:text-gms border-b border-b-gray-500 py-2  px-4'>
                                    GMS Edge
                            </Link> */}
                <Link
                  href="/accelerate"
                  className="block hover:text-gms border-b border-b-gray-500 py-2  px-4"
                >
                  GMS Accelerate
                </Link>
              </div>
            </div>
            <div className="my-auto group">
              <a className="uppercase text-2xl text-gray-600 hover:text-gms">
                solutions
              </a>
              <div className="hidden absolute bg-white -mb-8 group-hover:block text-lg text-gray-700 gap-y-4 uppercase">
                <Link
                  href="/semiconductors"
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  Semiconductors
                </Link>
                <Link
                  href="/microelectronics"
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  Microelectronics
                </Link>
                <Link
                  href="/ev"
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  EV
                </Link>
                {/* <Link
                                href="/pcb"
                                className="block hover:text-gms border-b border-b-gray-500 py-2 px-4">
                                PCB
                            </Link> */}
                <Link
                  href="/space-solar"
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  Space Solar
                </Link>
              </div>
            </div>
            <div className="my-auto group">
              <a className="uppercase text-2xl text-gray-600 hover:text-gms">
                products
              </a>
              <div className="hidden absolute bg-white -mb-8 group-hover:block text-lg text-gray-700 gap-y-4 uppercase">
                <Link
                  href="/category/components"
                  onClick={() => {
                    appStore.categoryTreeDisplayChange("components");
                  }}
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  Components
                </Link>
                <Link
                  href="/category/equipment"
                  onClick={() => {
                    appStore.categoryTreeDisplayChange("equipment");
                  }}
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  Equipments
                </Link>
                <Link
                  href="/category/materials"
                  onClick={() => {
                    appStore.categoryTreeDisplayChange("materials");
                  }}
                  className="block hover:text-gms border-b border-b-gray-500 py-2 px-4"
                >
                  Materials
                </Link>
              </div>
            </div>
            {/* <div className='my-auto group' >
                        <a className='uppercase text-2xl text-gray-600 hover:text-gms' >lab/demo</a>
                        <div className='hidden absolute bg-white -mb-8 group-hover:block text-lg text-gray-700 gap-y-4' >
                            <Link
                                href="/company"
                                className='block hover:font-gms hover:border-b-4 hover:border-b-gms py-2 px-4'>
                                
                                    LAB 1 (360 VIEW)
                                
                            </Link>
                        </div>
                    </div> */}
            <div className="my-auto">
              <Link
                href="/resources"
                className="uppercase text-2xl text-gray-600 hover:text-gms"
              >
                resources
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex hidden justify-between gap-x-4">
          <div className="my-auto">
            <Link href="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 text-gms h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="my-auto flex gap-x-2">
            <Link href="/cart" className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 text-gms h-8"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Link>
            {/* CART COUNT NUMBER */}
            <p className="block my-auto bg-sky-600 -ml-6 -mt-2  px-2 py-0.5 text-sm text-white rounded-full">
              {appStore.cartItems.length || 0}
            </p>
          </div>
        </div>

        {/* MOBILE NAVBAR */}
        <div className="lg:hidden mx-auto flex justify-between w-full">
          <div className="my-auto">
            <Link href="/" className="block">
              <img
                className="h-12"
                alt="GMS logo"
                src="https://gms-44a3.s3.amazonaws.com/static/home-2/images/logo.png"
              />
            </Link>
          </div>
          <div className="flex">
            <Link className="my-auto block" href="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 text-gray-600 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <button onClick={toggleNav} className="my-auto mx-4">
              {navOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV OPENS HERE */}
      <div
        onClick={toggleNav}
        className={`w-full bg-white p-2 pt-6 top-16 z-40 lg:hidden ${
          navOpen ? "fixed" : "hidden"
        } text-gray-700`}
      >
        <ul className="text-lg  flex flex-col gap-y-3">
          <li className="border-b border-gray-300">
            <Link href="/company">Company</Link>
          </li>
          <li className="border-b border-gray-300">
            <Link href="/accelerate">Accelerate</Link>
          </li>
          <li className="border-b border-gray-300">
            Solution
            <ul className="pl-4">
              <li>
                <Link href="/ev">EV</Link>
              </li>
              <li>
                <Link href="/semiconductors">Semiconductors</Link>
              </li>
              {/* <li>
                <Link href="/pcb">PCB</Link>
              </li> */}
              <li>
                <Link href="/microelectronics">Microelectronics</Link>
              </li>
              <li>
                <Link href="/space-solar">Space Solar</Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-gray-300">
            Products
            <ul className="pl-4">
              <li>
                <Link href="/category/components">Components</Link>
              </li>
              <li>
                <Link href="/category/equipment">Equipments</Link>
              </li>
              <li>
                <Link href="/category/materials">Materials</Link>
              </li>
            </ul>
          </li>
          {/* <li className='border-b border-gray-300'>
                    Lab/Demo
                </li> */}
          <li className="border-b border-gray-300">
            <Link href="/resources/">Resources</Link>
          </li>
          <li className="border-b border-gray-300">
            <Link href="/cart">
              Cart
              <p className="inline my-auto bg-sky-600 ml-1 px-2 py-1 text-sm text-white rounded-full">
                {appStore.cartItems.length || 0}
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
