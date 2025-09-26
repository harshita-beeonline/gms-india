import Link from "next/link";
import { getAsset } from "./utils";

const Footer = () => {
  return (
    <div className="w-full py-6 bg-gms">
      <div className="lg:container mx-auto flex lg:flex-row flex-col gap-y-4 justify-between px-8 border-b border-gray-100 py-8">
        <div className="my-auto lg:w-2/5">
          <div className="flex lg:flex-row flex-col lg:gap-x-3 gap-y-3">
            <img
              className="block my-auto w-44 shadow-sm my-auto"
              src={getAsset("57cb96c9-e3a0-4eb4-83c3-5e88804ac6fb.png")}
              alt="GMS Logo"
            />
            <p className=" text-gray-100 block text-sm my-auto">
              3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura,
              Bengaluru, Karnataka 560061
              <br />
              080 2666 5684/5
            </p>
          </div>

          <div className="mt-3">
            <p className="text-gray-200">
              GMS has been closely involved in semiconductor and
              microelectronics core component manufacturing for over 20 years.
              Wire bonding in particular is one such technology that has been
              adapted from our semiconductor industry to build automated
              scalable lithium battery packs.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap lg:gap-x-8 gap-y-5 text-gray-200">
          <div className="mb-auto flex flex-col w-1/2 lg:w-auto">
            <p className="text-lg font-bold text-white uppercase">
              {" "}
              Our Products
            </p>
            <Link href="/category/components">Components</Link>
            <Link href="/category/equipment">Equipments</Link>
            <Link href="/category/materials">Materials</Link>
          </div>
          <div className="mb-auto flex flex-col w-1/2 lg:w-auto">
            <p className="text-lg font-bold text-white uppercase">Solutions</p>
            <Link href="/ev">EV</Link>
            <Link href="/semiconductors">Semiconductors</Link>
            {/* 19-01-2025 start  */}
            {/* <Link href="/pcb" >PCB</Link> */}
            {/* 19-01-2025 start  */}
            <Link href="/microelectronics">Microelectronics</Link>
            <Link href="/space-solar">Space Solar</Link>
          </div>
          <div className="mb-auto flex flex-col w-1/2 lg:w-auto">
            <p className="text-lg text-white uppercase font-bold">Learn More</p>
            <Link href="/company">About Us</Link>
            <Link href="/resources">Resources</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto lg:container px-8 py-3 text-gray-200 flex justify-between">
        {/* 19-01-2025 start  */}
        <p className="block">
          Copyright © 2025-PRESENT Global Marketing Services, India. All rights
          reserved.
        </p>
        {/* 19-01-2025 start  */}
        {/* <p>
         Privacy Policy
         </p> */}
      </div>
    </div>
  );
};

export default Footer;
