import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import Advantage from "../components/Advantage";
import Contact from "../components/Contact";
import { getPageHero, IGetPageHero } from "../components/graphql";
import LogoCarousel from "../components/LogoCarousel";
import OGP from "../components/OGP";
import { getAsset, getLegacyAsset } from "../components/utils";
import { backendClient } from "./api/utils";

const Microelectronics = ({ heros }: { heros: IGetPageHero[] }) => {
    return (
        <div>
            <OGP
                title="Microelectronics"
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
                    heros[0].video && heros[0].video.id ? (
                        <video autoPlay muted loop className='object-fill w-full absolute -z-50 h-[65vh] brightness-50'  >
                            <source src={getAsset(heros[0].video.id)} type="video/mp4" />
                        </video>
                    ) : heros[0].image && heros[0].image.id ? (
                        <div
                            className="block absolute w-full -z-30 bg-cover"
                            style={{
                                backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url('${process.env.NEXT_PUBLIC_DIRECTUS_FRONTEND_URL}/assets/${heros[0].image.id}')`,
                                height: "65vh",
                            }}
                        />
                    ) : null
                }
                <div className="lg:w-3/4 lg:p-24 p-6 flex flex-col gap-y-3" >
                    <p className="block text-xl text-yellow-400" >
                        MICROELECTRONICS
                    </p>
                    <h1 className="lg:text-5xl text-3xl text-gray-200 font-bs block" >
                        Bridging Decades of MICROELECTRONICS Expertise with Our Global Network of Partners To Bring Success for Our Customers
                    </h1>
                    <Link
                        href="#contact"
                        className="inline-block rounded-full px-5 py-3 bg-gms text-white mr-auto uppercase">
                        Get a Quote
                    </Link>
                </div>
            </motion.div>



            <div className="lg:container mx-auto">
                <h2 className="text-3xl uppercase font-bs text-center text-gray-600 px-4" >
                    curated solutions for all your product needs
                </h2>
                <motion.div initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }} className="my-10 flex lg:flex-row flex-col justify-evenly gap-x-0.5 text-gray-700" >

                    <Link href="/category/manual" className="px-8 py-3 bg-gms w-full text-white">

                        <p className="text-2xl font-bold" >
                            Equipments
                        </p>
                        <p className="mt-4" >
                            By bringing cutting edge technologies from world renowned manufacturers. GMS ensuresyou get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyong to match the batteries output spec
                        </p>

                    </Link>
                    <Link
                        href="/category/silicon-wafers"
                        className="px-8 py-3 w-full hover:bg-gray-100">

                        <p className="text-2xl font-bold" >
                            Materials
                        </p>
                        <p className="mt-4" >
                            By bringing cutting edge technologies from world renowned manufacturers. GMS ensuresyou get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyong to match the batteries output spec
                        </p>

                    </Link>
                    <Link
                        href="/category/power-supplies"
                        className="px-8 py-3 bg-gms w-full text-white">

                        <p className="text-2xl font-bold" >
                            Components
                        </p>
                        <p className="mt-4" >
                            By bringing cutting edge technologies from world renowned manufacturers. GMS ensuresyou get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyong to match the batteries output spec
                        </p>

                    </Link>

                    <div className="px-8 py-3 w-full" >
                        <p className="text-2xl font-bold" >
                            Custom Solutions
                        </p>
                        <p className="mt-4" >
                            By bringing cutting edge technologies from world renowned manufacturers. GMS ensuresyou get the right solution to meet your production goals at the right cost and quality. From purchase order to delivery, from qualifying to automating for efficiency. GMS extends its support above and beyong to match the batteries output spec
                        </p>
                    </div>

                </motion.div>
            </div>


            <div className="py-8 bg-[#4d70c2]">
                <div className="lg:container mx-auto my-10 px-3 lg:px-8" >
                    <h2 className="text-3xl text-center  uppercase font-bs text-white" >
                        our core domain experience advantage
                    </h2>
                    <div className="my-10" >
                        <Advantage active="gms" />
                    </div>
                </div>
            </div>

            <div className="lg:container mx-auto lg:px-8 px-3 justify-between mt-16" >
                <div className="" >
                    <p className="text-center text-3xl" >
                        Our Clients
                    </p>
                    <div className="mt-6" >

                        <LogoCarousel logos={[
                            "34be9763-80b0-4ee1-9fad-7621d8287b0f",
                            "e95943ad-407f-4451-8cf4-6ffe15635ea2",
                            "639c7f6b-1b4e-4fad-bbd1-bd38c481fc6b",
                            "f011f1c2-0b47-413f-833e-e0a2744a5b38.jpg",
                            "36f1b281-a1f8-482b-adae-34f571ea1dfd",
                            "545bbf9f-ccdf-4646-a2fb-4c48517f009f",
                            "29ebcb7e-700b-4111-91a4-8d10ef7de4c0"
                        ]} />

                    </div>
                </div>
                <div className="" >
                    <p className="text-center text-3xl" >
                        Our Partners
                    </p>
                    <div className="mt-6" >
                        <LogoCarousel
                            logos={[
                                "dd6a0177-b627-406c-8a6d-6a25229c563e.png",
                                "e81a3821-732e-4809-b327-4f709ed272ca",
                                "7a1f544c-cb8b-45d8-8597-37ede009bbd0.png",
                                "31d5273c-5a0e-4e17-98ad-4e3844e5d162.png"
                            ]}
                            visibleSlides={4}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5" style={{ background: "#4f71c2" }} >
                <div className="lg:container py-14 mx-auto text-white">
                    <h2 className="text-4xl text-center" >
                        India's 1st Exclusive
                    </h2>
                    <h3 className="text-2xl text-center" >
                        Clean Room with state of the art equipment
                    </h3>

                    <div className="flex lg:flex-row flex-col justify-center mt-10 overflow-x-hidden" >
                        <motion.div initial={{ opacity: 0, translateX: -50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateX: 0 }} className="p-4 bg-gms rounded-xl mx-4" >
                            <img className="rounded-xl border-10 border-gms block mx-auto" alt="Accurate" src={getAsset("56fa78e0-ce5d-4a94-abaf-e5203b44e587.jpg", 70, 450)} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, translateX: 50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateX: 0 }} className="lg:w-1/2 lg:px-24 px-10 mt-6 text-2xl lg:my-auto text-center" >
                            <p>
                                GMS-India is proud to present over 4000sq/ft of In-House Clean rooms for all your prototyping and testing needs.
                            </p>
                            <p className="mt-4" >
                                Our clean rooms are equipped with State-Of-The-Art equipments and are designed to adhere to the FS209E Class 8 and ISO Class 3 standards, ensuring we deliver the best value to our customers.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-5 inline-block uppercase text-lg text-gms py-3 px-6 rounded-full bg-white hover:bg-gray-300">

                                Talk to our experts

                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>


            <div id="contact" className="lg:container mx-auto mt-10 overflow-x-hidden" >
                <Contact buttonColor="gms" />
            </div>



        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const {
        Page_Heros
    }: { Page_Heros: IGetPageHero[] } = await backendClient.request(getPageHero, { page: "microelectronics" })
    return {
        props: {
            heros: Page_Heros
        }
    }
};

export default Microelectronics;
