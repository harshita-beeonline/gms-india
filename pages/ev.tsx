/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import Advantage from "../components/Advantage";
import Contact from "../components/Contact";
import { getPageHero, IGetPageHero } from "../components/graphql";
import OGP from "../components/OGP";
import { getAsset, getLegacyAsset } from "../components/utils";
import { backendClient } from "./api/utils";

const EV = ({ hero }: { hero: IGetPageHero }) => {
    return (
        <div>
            <OGP
                title="EV"
                image=""
            />
            <motion.div
                initial="hidden" animate="visible"
                variants={{
                    hidden: {
                        scale: 0.7,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.7
                        }
                    }
                }}
                className="w-full relative" style={{ height: "70vh" }} >
                {/* BACKGROUND DIV */}
                {
                    hero.video && hero.video.id ? (
                        <video autoPlay muted loop className='object-fill w-full absolute -z-50 h-[65vh] brightness-50'  >
                            <source src={getAsset(hero.video.id)} type="video/mp4" />
                        </video>
                    ) : hero.image && hero.image.id ? (
                        <div
                            className="block absolute w-full -z-30 bg-cover"
                            style={{
                                backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url('${process.env.NEXT_PUBLIC_DIRECTUS_FRONTEND_URL}/assets/${hero.image.id}')`,
                                height: "65vh",
                            }}
                        />
                    ) : null
                }
                <div className="lg:w-1/2 lg:p-28 p-6 flex flex-col gap-y-3" >
                    <p className="block text-xl text-yellow-400" >
                        EV
                    </p>
                    <h1 className="lg:text-5xl text-4xl text-gray-200 font-bs block" >
                        LEVERAGING ADVANCED TECHNOLOGY CAPABILITIES TO DELIVER STATE-OF-THE-ART EV SOLUTIONS
                    </h1>
                    <Link
                        href="#contact"
                        className="inline-block rounded-full px-5 py-3 bg-[#339335] text-white mr-auto uppercase">
                        LET'S WORK TOGETHER
                    </Link>
                </div>
            </motion.div>

            <div className="lg:container mx-auto">
                <h2 className="text-3xl uppercase font-bs text-center text-gray-600 px-4" >
                    curated solutions for all your product needs
                </h2>
                <motion.div initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }} className="my-10 flex lg:flex-row flex-col justify-evenly gap-x-0.5 text-white" >

                    <Link
                        href="/category/manual"
                        className="p-6 bg-ev hover:bg-indigo-900 w-full block">

                        <p className="text-2xl font-bold" >
                            Equipments
                        </p>
                        <p className="mt-4" >
                            Equipment sourced from Industry Leading Manufacturers powered by our well-supported after-sales services for reliability and assurance.
                        </p>

                    </Link>


                    <Link
                        href="/category/silicon-wafers"
                        className="p-6 bg-green-800 hover:bg-green-900 w-full">

                        <p className="text-2xl font-bold" >
                            Materials
                        </p>
                        <p className="mt-4" >
                            Ensuring high performance and robust solutions to lead innovative processes.

                        </p>

                    </Link>


                    <Link
                        href="/category/power-supplies"
                        className="p-6 bg-ev hover:bg-indigo-900 w-full">

                        <p className="text-2xl font-bold" >
                            Components
                        </p>
                        <p className="mt-4" >
                            We provide our own specialized products to fill identified market gaps.

                        </p>

                    </Link>


                    <div className="p-6 bg-green-800  w-full" >
                        <p className="text-2xl font-bold" >
                            Custom Solutions
                        </p>
                        <p className="mt-4" >
                            Based on the idea of detailed engineering and technical approach towards design implementation, we ensure to meet your requirements.

                        </p>
                    </div>

                </motion.div>
            </div>


            <div className="bg-ev-green py-8" >
                <div className="lg:container mx-auto my-10 px-3 lg:px-8" >
                    <h2 className="text-3xl text-center  uppercase font-bs text-white" >
                        our core domain experience advantage
                    </h2>
                    <div className="my-10" >
                        <Advantage />
                    </div>
                </div>
            </div>

            <div className="lg:container mx-auto lg:px-8 px-3 flex lg:flex-row flex-col justify-between mt-16" >
                <div className="lg:w-1/2" >
                    <p className="text-center text-xl" >
                        Our Clients
                    </p>
                    <div className="grid grid-flow-row grid-cols-2 gap-2 mt-6" >
                        <img alt="" className="block m-auto" src={getAsset("ba22a64c-283d-4618-afc6-cb0d46cd4a7e", 75, 200)} />
                        <img alt="" className="block m-auto" src={getAsset("94d21587-0907-4c55-a2da-b0e46b3a8d1b", 75, 200)} />
                    </div>
                </div>
                <div className="lg:w-1/2" >
                    <p className="text-center text-xl" >
                        Our Partners
                    </p>
                    <div className="grid grid-flow-row grid-cols-2 gap-2 mt-6" >
                        <img alt="" className="block m-auto" src={getAsset("e81a3821-732e-4809-b327-4f709ed272ca", 75, 150)} />
                        <img alt="" className="block m-auto" src={getLegacyAsset("manufacturers/008_Manufacturer.png")} />
                    </div>
                </div>
            </div>

            <motion.div
                initial="hidden" whileInView="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.7
                        }
                    }
                }}
                className="lg:container mx-auto mt-14 lg:px-8 px-3" >
                <h2 className="p-5 bg-ev text-4xl text-white block text-center" >
                    Are you a startup ? Then our GMS ACCELERATE Program is for YOU!
                </h2>
                <div className="text-center text-gray-600 text-2xl mt-5 px-5" >
                    <p>
                        GMS ACCELERATE is our STARTUP accelerator program
                    </p>
                    <p>
                        Come to us with what you would like to achieve in your process and we will help you achieve it with our inhouse expertise and core domain experience
                    </p>
                </div>

                {/* THE GMS PROCESS */}
                <div className="flex flex-col lg:flex-row justify-evenly mt-10" >
                    <div>
                        <p className="p-4 text-xl uppercase bg-ev text-white" >
                            DESIGN
                        </p>
                        <div className="p-8 bg-ev-green mx-0.5" >
                            <p className="text-white" >
                                Review your product designs by our team of industry experts. Get the design reviewed for scaling up and fix and issue that were overseen
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="p-4 text-xl uppercase bg-ev text-white" >
                            DEVELOP
                        </p>
                        <div className="p-8 bg-ev-green mx-0.5" >
                            <p className="text-white" >
                                With the help of our in-house expertise and our global network of partners, develop your designs to cater to all the specifications you want the end product ot achieve.
                            </p>
                        </div>
                    </div>


                    <div>
                        <p className="p-4 text-xl uppercase bg-ev text-white" >
                            PROTOTYPE
                        </p>
                        <div className="p-8 bg-ev-green mx-0.5" >
                            <p className="text-white" >
                                Optimise your designs by developing and testing prototypes in our well equipped lab with the help of our team of well trained technicians.
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="p-4 text-xl uppercase bg-ev text-white" >
                            PRODUCTION
                        </p>
                        <div className="p-8 bg-ev-green mx-0.5" >
                            <p className="text-white" >
                                From proof of concepts to full scale production, plan, partner and develop a production strategy to meet your startup's business goals.
                            </p>
                        </div>
                    </div>
                </div>

            </motion.div>

            <div id="contact" className="lg:container mx-auto mt-10" >
                <Contact />
            </div>


        </div>
    );
};



export const getStaticProps: GetStaticProps = async (context) => {
    const {
        Page_Heros
    }: { Page_Heros: IGetPageHero[] } = await backendClient.request(getPageHero, { page: "ev" });
    return {
        props: {
            hero: Page_Heros[0]
        }
    }
};

export default EV;
