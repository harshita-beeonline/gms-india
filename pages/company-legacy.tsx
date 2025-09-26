const Company = () => (
    <div>
        <div className="lg:container mx-auto my-6" >
            <div>
                <h1 className="text-5xl font-chianti text-center text-gray-600">Company Profile</h1>
            </div>
            <div className="my-10 w-full bg-blue-300 rounded-md" >
                <iframe
                    src="https://www.youtube-nocookie.com/embed/MjQcQLrxmwM?controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder={0}
                    style={{ height: "400px", width: "600px" }}
                    className="mx-auto max-h-full hidden lg:block"
                />
                                <iframe
                    src="https://www.youtube-nocookie.com/embed/MjQcQLrxmwM?controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder={0}
                    className="mx-auto block lg:hidden max-h-full"
                />
            </div>
            <div className="flex flex-col gap-y-4 px-6 lg:px-32 text-lg" >
                <p className="block" >
                Global Marketing Services-GMS is a leading solution provider to device manufacturing & research organisations in India. Based in Bangalore, we offer a wide range of equipments, components and materials for the Thin Films, semiconductors, microelectronics, MEMS, LED and Solar applications. 
                </p>
                <p className="block">
                Over the years, GMS has been part of various prestigious projects in India. This has resulted in our team gaining significant experience & exposure to some of the best semiconductor technologies, products and processes. We have also partnered / associated with some of the world’s leading product manufacturers in Micro and Nano technology space. This helps us to offer the latest in Technology to our Customers enabling them to “Make The Right Choice”. 
                </p>
                <p className="block">
                GMS offers a wide range of products right from basic substrates like silicon wafers to final packages to get a finished product and as part of our offerings, GMS can offer components like sputtering magnetrons, power supplies, quipment like lithography systems, deposition systems, wafer bonders, wire bonders,and other allied equipment and materials like semiconductor packages, Photoresist Chemicals 
                </p>
                <p className="block">
                GMS started its operations in 2001 with the main objective to support customers in the semiconductor manufacturing & research and offer world class products & services. We have several installations of our equipment at different labs, institutes like IITs, DRDO labs, Space departments and many large public and private companies like Bharat Electronics, Moser Baer, Tata BP Solar and our materials and components are sold to all the major universities and labs in India. Global Marketing Services has an exhaustive listing of product offering for the above applications. 
                </p>
                <p className="block">
                GMS, through its group company Prolyx Microelectronics Pvt. Ltd. has started a packaging lab/demo centre facility with wire bonder, C-SAM scanning Acoustic Microscope used for detection of packaging defects along with other associated tools for demonstrating and offering services for microelectronic packaging and non-destructive testing of devices. 
                </p>
            </div>
        </div>
    </div>
);

export default Company;