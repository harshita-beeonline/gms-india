/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import Advantage from "../components/Advantage";
import Contact from "../components/Contact";
import { getPageHero, IGetPageHero } from "../components/graphql";
import LogoCarousel from "../components/LogoCarousel";
import OGP from "../components/OGP";
import { getAsset } from "../components/utils";
import { backendClient } from "./api/utils";

interface IClientImage {
  name: string;
  url: string | null;
  image_url: {
    id: string;
  };
}

interface PartnerImage {
  Name: string;
  url: string | null;
  image: {
    id: string;
  };
}

interface ISCProps {
    heros: IGetPageHero[],
    frontend_clientsimage: IClientImage[],
    frontend_partners: PartnerImage[]
}

const SC = ({ heros, frontend_clientsimage, frontend_partners }: ISCProps) => {
    return (
        <div className="font-bs" >

            <OGP
                title="Semiconductors"
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
                        SEMICONDUCTORS/MEMS
                    </p>
                    <h1 className="lg:text-6xl text-3xl text-gray-200 font-bs block" >
                        Empowering India's
                        Semiconductor/MEMS manufacturing
                        sector!
                    </h1>
                    <h2 className="text-2xl text-gray-200" >
                        Custom Crafted Solutions to Meet All Your Product Needs
                    </h2>
                    <Link
                        href="#contact"
                        className="inline-block rounded-full px-5 py-3 bg-gms text-white mr-auto uppercase">
                        Lets work together
                    </Link>
                </div>
            </motion.div>



            <div className="lg:container mx-auto">
                <h2 className="text-3xl uppercase font-bs text-center text-gray-600 px-4" >
                    curated solutions for all your product needs
                </h2>
                <motion.div initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }} className="my-10 flex lg:flex-row flex-col justify-evenly gap-x-0.5 text-gray-700" >

                    <Link href="/category/manual" className="px-8 py-3 bg-gms w-full text-white">

                        <p className="text-2xl font-bold text-yellow-400" >
                            Equipments
                        </p>
                        <p className="mt-4" >
                            Choosing the right equipment is crucial. Additionally, prioritizing the needs of the client will also allow us to focus more on their R&D requirements and provide the solutions that are ideal for the process and product.
                        </p>

                    </Link>


                    <Link
                        href="/category/silicon-wafers"
                        className="px-8 py-3 w-full hover:bg-slate-100">

                        <p className="text-2xl font-bold text-gms" >
                            Materials
                        </p>
                        <p className="mt-4" >
                            We have an extensive network of global suppliers and vendors who are prepared to cooperate with low volume demands of the Indian marketplace while upholding the highest standards.
                        </p>

                    </Link>


                    <Link
                        href="/category/power-supplies"
                        className="px-8 py-3 bg-gms w-full text-white">

                        <p className="text-2xl font-bold text-yellow-400" >
                            Components
                        </p>
                        <p className="mt-4" >
                            We only offer the best products from the best companies in the respected fields in order to deliver trustworthy components as part of the after-sales work.

                        </p>

                    </Link>


                    <div className="px-8 py-3 w-full" >
                        <p className="text-2xl font-bold text-gms" >
                            Custom Solutions
                        </p>
                        <p className="mt-4" >
                            With over two decades of experience, we can provide you personalized solutions and solutions that go beyond conventional thinking.
                        </p>
                    </div>

                </motion.div>
            </div>

            <div className="bg-gms py-8" >
                <div className="lg:container mx-auto my-10 px-3 lg:px-8" >
                    <h2 className="text-3xl text-center  uppercase font-bs text-white" >
                        our core domain experience advantage
                    </h2>
                    <div className="my-10" >
                        <Advantage activeFont="yellow-400" />
                    </div>
                </div>
            </div>

            <div className="lg:container mx-auto lg:px-8 px-3 mt-16" >
                <div className="lg:w-full" >
                    <p className="text-center text-2xl" >
                        Our Clients
                    </p>
                    <div className="mt-4" >
                        <LogoCarousel logos={frontend_clientsimage.map(x => x.image_url.id)} />
                    </div>

                </div>
                <div className="lg:w-full mt-10" >
                    <p className="text-center text-2xl" >
                        Our Partners
                    </p>
                    <div className="mt-4" >
                        <LogoCarousel
                            logos={
                                frontend_partners.map(x => x.image.id)
                            }
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
                        <motion.div initial={{ opacity: 0, translateX: 50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateX: 0 }} className="lg:w-1/2 lg:px-24 px-10 mt-6 text-2xl text-center lg:my-auto" >
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


            <div id="contact" className="lg:container mx-auto mt-10" >
                <Contact buttonColor="gms" />
            </div>



        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const {
        Page_Heros
    }: { Page_Heros: IGetPageHero[] } = await backendClient.request(getPageHero, { page: "semiconductors" });
    const {
        frontend_clientsimage,
        frontend_partners
    } = await backendClient.request<{
        frontend_clientsimage: IClientImage[],
        frontend_partners: PartnerImage[]
    }>(`
    {
        frontend_clientsimage {
          name
          image_url {
            id
          }
          url
        }
        frontend_partners {
          Name
          image {
            id
          }
          url
        }
      }
      `);
    return {
        props: {
            heros: Page_Heros,
            frontend_partners: frontend_partners,
            frontend_clientsimage: frontend_clientsimage
        }
    }
};

export default SC;
