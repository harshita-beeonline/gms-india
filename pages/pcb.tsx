import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import Advantage from "../components/Advantage";
import Contact from "../components/Contact";
import { getPageHero, IGetPageHero } from "../components/graphql";
import OGP from "../components/OGP";
import { getAsset } from "../components/utils";
import { backendClient } from "./api/utils";

const PCB = ({ heros }: { heros: IGetPageHero[] }) => {
    return (
        <div>

            <OGP
                title="PCB"
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
                        PCB
                    </p>
                    <h1 className="lg:text-5xl text-4xl text-gray-200 font-bs block" >
                        BRINGING TO YOU A SEAMLESS PROTOTYPING CYCLE WITH OUR MILITARY GRADE PCB SOLUTIONS.
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
                <motion.div initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }}  className="my-10 flex lg:flex-row flex-col justify-evenly gap-x-0.5 text-gray-700" >

                    <div className="px-8 py-3 bg-gms w-full text-white" >
                        <p className="text-2xl font-bold" >
                            Equipments
                        </p>
                        <p className="mt-4" >
                            With our solutions, prototyping and manufacturing have never been simpler.

                        </p>
                    </div>


                    <div className="px-8 py-3  w-full" >
                        <p className="text-2xl font-bold" >
                            Materials
                        </p>
                        <p className="mt-4" >
                            24 Layered Copper and Fabricated Boards and Many more.

                        </p>
                    </div>


                    <div className="px-8 py-3  bg-gms w-full text-white" >
                        <p className="text-2xl font-bold" >
                            Components
                        </p>
                        <p className="mt-4" >
                            Implemented unique processes for delivering consistency and quality.

                        </p>
                    </div>

                    <div className="px-8 py-3  w-full" >
                        <p className="text-2xl font-bold" >
                            Custom Solutions
                        </p>
                        <p className="mt-4" >
                            Our capacity to work with flexible solutions and low-volume requirements.

                        </p>
                    </div>

                </motion.div>
            </div>


            <div className="bg-[#4d70c2] py-8" >
                <div className="lg:container mx-auto my-10 px-3 lg:px-8" >
                    <h2 className="text-3xl text-center  uppercase font-bs text-white" >
                        our core domain experience advantage
                    </h2>
                    <div className="my-10" >
                        <Advantage active="gms" />
                    </div>
                </div>
            </div>

            <div className="lg:container mx-auto lg:px-8 px-3 flex lg:flex-row flex-col justify-between mt-16" >
                {/* <div className="lg:w-1/2" >
                    <p className="text-center text-xl" >
                        Our Clients
                    </p>
                    <div className="grid grid-flow-row grid-cols-2 gap-2 mt-6" >
                        <img className="block m-auto" src={getAsset("9fc03113-2b8c-4f4e-a167-56bc1eab5077", 75, 120)} />
                        <img className="block m-auto" src={getAsset("02d627de-f0d5-4361-9c3e-fa9076b3e5f8", 75, 120)} />
                        <img className="block m-auto" src={getAsset("a05baed3-6fa4-4401-afb6-cd6b24fcd5aa", 75, 120)} />
                        <img className="block m-auto" src={getAsset("02d627de-f0d5-4361-9c3e-fa9076b3e5f8", 75, 120)} />
                    </div>
                </div> */}
                <div className="lg:w-1/2 mx-auto" >
                    <p className="text-center text-xl" >
                        Our Partners
                    </p>
                    <div className="mx-auto" >
                        <img className="block m-auto" src={getAsset("051930ba-251a-41f8-8968-61c3f51bf5c3", 100, 200)} />
                    </div>
                </div>
            </div>

            <div className="mt-5" style={{ background: "#4f71c2" }} >
                <div className="lg:container py-14 mx-auto text-white">
                    <h2 className="text-4xl text-center" >
                        Specialized PCB Solutions
                    </h2>
                    <h3 className="text-2xl text-center" >
                        For High Precision Designs
                    </h3>

                    <div className="flex lg:flex-row flex-col justify-center mt-10" >
                        <div className="p-4 bg-gms rounded-xl mx-4" >
                            <img className="rounded-xl border-10 border-gms block mx-auto" alt="Accurate" src={getAsset("91209e0b-1088-45bb-8bb5-7bb24a7c4154", 70, 450)} />
                        </div>
                        <div className="lg:w-1/2 lg:px-24 px-10 mt-6 text-2xl lg:my-auto text-center" >
                            <p>
                                GMS-India offers high-quality PCB Solutions matching your high precision specifications with unparallel sales, support and lead times to help make your vision a reality with quality.
                            </p>
                            <Link
                                href="/contact"
                                className="lg:mt-20 mt-5 inline-block uppercase text-lg text-gms py-3 px-6 rounded-full bg-white hover:bg-gray-300">
                                Talk to our experts
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


            <div id="contact" className="lg:container mx-auto mt-10" >
                <Contact buttonColor="gms" />
            </div>



        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {
        Page_Heros
    }: { Page_Heros: IGetPageHero[] } = await backendClient.request(getPageHero, { page: "pcb" })
    return {
        props: {
            heros: Page_Heros
        }
    }
};

export default PCB;
