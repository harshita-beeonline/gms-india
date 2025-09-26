import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import Advantage from "../components/Advantage";
import Contact from "../components/Contact";
import { getPageHero, IGetPageHero } from "../components/graphql";
import OGP from "../components/OGP";
import { getAsset } from "../components/utils";
import { backendClient } from "./api/utils";

const SpaceSolar = ({ heros }: { heros: IGetPageHero[] }) => {
    return (
        <div className="font-bs" >
            <OGP title="Space Solar" image="" />
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
                <div className="lg:w-1/2 lg:p-24 p-6 flex flex-col gap-y-3" >
                    <p className="block text-xl text-yellow-400" >
                        SPACE SOLAR
                    </p>
                    <h1 className="lg:text-4xl text-4xl text-gray-200 font-bs block capitalize" >
                        Revolutionising space explorations with our value-added engineering expertise
                    </h1>
                    <Link
                        href="#contact"
                        className="inline-block rounded-full px-5 py-3 bg-gms text-white mr-auto uppercase mt-6">
                        CONNECT WITH US
                    </Link>
                </div>
            </motion.div>



            <div className="lg:container mx-auto">
                <h2 className="text-3xl uppercase font-bs text-center text-gray-600 px-4" >
                    curated solutions for all your product needs
                </h2>
                <motion.div
                initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }}
                 className="my-10 flex lg:flex-row flex-col justify-evenly gap-x-0.5 text-gray-700" >

                    <div className="p-8 bg-gms w-full text-white" >
                        <p className="text-xl font-bold" >
                            Equipments
                        </p>
                        <p className="mt-4" >
                            Through our experienced craftsmanship and in-depth knowledge, we support special and critical applications such as space explorations.

                        </p>
                    </div>


                    <div className="p-8 w-full text-white bg-gray-800" >
                        <p className="text-xl font-bold" >
                            Materials
                        </p>
                        <p className="mt-4" >
                            Designed based on the varying levels of tolerance required for space exploration.

                        </p>
                    </div>


                    <div className="p-8 bg-gms w-full text-white" >
                        <p className="text-xl font-bold" >
                            Components
                        </p>
                        <p className="mt-4" >
                            Cost-effective and durable solutions

                        </p>
                    </div>

                    <div className="p-8 w-full bg-gray-800 text-white" >
                        <p className="text-xl font-bold" >
                            Custom Solutions
                        </p>
                        <p className="mt-4" >
                            Comprehensive manufacturing solutions and product management services for this sector.

                        </p>
                    </div>

                </motion.div>
            </div>


            <div className="bg-gms py-8" >
                <div className="lg:container mx-auto my-10 px-3 lg:px-8" >
                    <h2 className="text-3xl text-center  uppercase font-bs text-white" >
                        our core domain experience expertise
                    </h2>
                    <div className="my-10" >
                        <Advantage active="gray-800" />
                    </div>
                </div>
            </div>

            <div className="lg:container mx-auto lg:px-8 px-3 flex lg:flex-row flex-col justify-between mt-16" >
                <div className="lg:w-1/2" >
                    <p className="text-center text-xl" >
                        Our Clients
                    </p>
                    <div className="mx-auto" >
                        <img className="block m-auto" src={getAsset("639c7f6b-1b4e-4fad-bbd1-bd38c481fc6b", 100, 150)} />
                    </div>
                </div>
                <div className="lg:w-1/2" >
                    <p className="text-center text-xl" >
                        Our Partners
                    </p>
                    <div className="mx-auto" >
                        <img className="block m-auto" src={getAsset("bb8c34bd-43a2-413d-9010-405fd2ab98de.png", 80, 150)} />
                    </div>
                </div>
            </div>


            <div className="mt-5" style={{ background: "#4f71c2" }} >
                <div className="lg:container py-14 mx-auto text-white">
                    <h2 className="text-4xl text-center" >
                        State-of-the-art SOLAR CELLS
                    </h2>
                    <h3 className="text-2xl text-center" >
                        Offer high effciences, small temperature coeffcients and excellent Power to Mass Ratio
                    </h3>

                    <div className="flex lg:flex-row flex-col justify-center mt-10" >
                        <motion.div initial={{ opacity: 0, translateX: -50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateX: 0 }} className="p-4 bg-gms rounded-xl mx-4" >
                            <img className="rounded-xl border-10 border-gms block mx-auto" alt="Accurate" src={getAsset("5c343e05-1c09-4582-9e39-fcbaa20813f4", 70, 450)} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, translateX: 50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateX: 0 }} className="lg:w-1/2 lg:px-24 px-10 mt-6 text-2xl lg:my-auto" >
                            <p>
                                Introducing our State-Of-The-Art 1500sq ft Lithography facility. The lab will take care of stages starting from designing to prototyping and testing. The non-destructive analysis will be conducted using these setups to ensure results to spec.
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

            <div id="contact" className="lg:container mx-auto mt-10" >
                <Contact buttonColor="gms" />
            </div>



        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {
        Page_Heros
    }: { Page_Heros: IGetPageHero[] } = await backendClient.request(getPageHero, { page: "space-solar" })
    return {
        props: {
            heros: Page_Heros
        }
    }
};

export default SpaceSolar;
