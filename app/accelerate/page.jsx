import Link from "next/link";
import OGP from "../../components/OGP";
import { getAsset } from "../../components/utils";

const AcceleratePage = () => (
    <div>
        <OGP image="" title="GMS ACCELERATE" />
        <div style={{ height: "35vh" }} className="w-full relative flex flex-col" >
            <div className="block absolute w-full -z-30 bg-cover" style={{ backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${getAsset("2c63b17d-1c58-4b28-90e2-525026f78641")})`, height: "35vh" }} />
            <div className="mt-auto" >
                <h1 className="text-5xl font-chianti text-center text-gray-100 mt-auto mb-16">GMS ACCELERATE</h1>
            </div>
        </div>
        <div className="lg:mx-auto lg:px-6 lg:container my-8 mx-6" >
            <p className="text-center text-gray-500 text-2xl font-semibold" >
                GMS ACCELERATE is our STARTUP accelerator program.<br />
                Come to us with your goals!
                Our experts will help you design comprehensive and all-encompassing approaches to achieving them.
                From design and development to prototyping and production, we have got you covered.

            </p>
            <div className="mt-8" >
                {/* THE GMS PROCESS */}
                <div className="grid lg:grid-cols-4 grid-cols-1 justify-evenly mt-10" >
                    <div className="h-full" >
                        <p className="p-4 text-xl uppercase bg-gms text-white" >
                            DESIGN
                        </p>
                        <div className="p-8 bg-sky-600 lg:mr-2 min-h-[260px]" >
                            <p className="text-white" >
                                Our team of industry experts reviews the product design, checking it for mistake and scaling up.
                                Product design review by our team of industry experts, evaluation for scaling and errors.
                            </p>
                        </div>
                    </div>

                    <div className="h-full" >
                        <p className="p-4 text-xl uppercase bg-gms text-white" >
                            DEVELOP
                        </p>
                        <div className="p-8 bg-sky-600 lg:mr-2 min-h-[260px]" >
                            <p className="text-white" >
                                Develop your designs with the assistance of our own expertise and our global network of partners to meet all the specifications and requirements of the finished product.
                            </p>
                        </div>
                    </div>

                    <div className="h-full" >
                        <p className="p-4 text-xl uppercase bg-gms text-white" >
                            PROTOTYPE
                        </p>
                        <div className="p-8 bg-sky-600 lg:mr-2 min-h-[260px]" >
                            <p className="text-white" >
                                Optimize your designs by creating and testing prototypes in our well-equipped lab with the assistance of our team of skilled experts.
                            </p>
                        </div>
                    </div>

                    <div className="h-full" >
                        <p className="p-4 text-xl uppercase bg-gms text-white" >
                            PRODUCTION
                        </p>
                        <div className="p-8 bg-sky-600 min-h-[260px]" >
                            <p className="text-white" >
                                Plan, partner with, and create a production strategy from proof of concept to full-scale production to achieve the business objectives of your startup.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 flex justify-center"  >
                <Link
                    href="/contact"
                    className="bg-sky-500 px-4 py-3 text-white text-2xl rounded-xl hover:bg-sky-600 inline-block">
                    Explore the process
                </Link>
            </div>
        </div>

    </div>
);

export default AcceleratePage;
