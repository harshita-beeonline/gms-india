import Link from "next/link";
import FloatingIcons from "../../components/FloatingIcons";
import OGP from "../../components/OGP";
import { getAsset } from "../../components/utils";


const ourValues = [
    {
        title: "CUSTOMER-CENTRIC APPROACH                                    ",
        value: `We understand that every project and every customer has different demands and problems, which is why we are here to support them at every level by providing ongoing after-sales assistance.
        `
    },
    {
        title: "QUALITY ASSURANCE        ",
        value: `Our team is committed to providing top-notch products and services.
        `
    },
    {
        title: 'RELIABLE COMPONENTS        ',
        value: `We understand the importance and necessity of well-engineered components for the efficiency of precision and specialized industry.
        `
    },
    {
        title: "ACCESSIBILITY TO CUTTING-EDGE TECHNOLOGY        ",
        value: `The best is needed to go beyond boundaries. To accomplish this, we will make use of our extensive network of collaborators and associates.
        `
    }
]

const Company = () => (
    <div>
        <FloatingIcons />
        <OGP title="About Us" image="" />
        <div style={{ height: "35vh" }} className="w-full relative flex flex-col" >
            <div className="block absolute w-full -z-30 bg-cover" style={{ backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${getAsset("2c63b17d-1c58-4b28-90e2-525026f78641")})`, height: "35vh" }} />
            <div className="mt-auto" >
                <h1 className="text-5xl font-chianti text-center text-gray-100 mt-auto mb-16">About Us</h1>
            </div>
        </div>

        <div className="lg:container lg:mx-auto mx-8 my-8 flex lg:flex-row flex-col" >
            <div className="lg:w-1/3 p-6" >
                <div className="bg-gms rounded-xl p-6" >
                    <p className="text-3xl text-gray-200 font-semibold" >
                        Contact
                    </p>
                    <div className="mt-4 text-gray-200" >
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 inline">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            080 2666 5684/5
                        </p>
                        <p className="block mt-4" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 inline">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            info@gms-india.com
                        </p>
                        <Link
                            rel="noopener"
                            href="https://goo.gl/maps/Bp4T5EGWkorWBnxE7"
                            className="block mt-4 text-gray-200">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline mr-1">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            3rd floor, 1, Sharadanagar, Uttarahalli Main Rd, Vasanthapura, Bengaluru, Karnataka 560061
                        </Link>
                    </div>
                    <Link
                        href={getAsset("96b3b7a5-ea7f-4bad-bc86-d27ef0832119.pdf") + "&download"}
                        className="bg-white hover:bg-gray-200 rounded-lg px-6 py-3 mt-6 block">
                        <p className="text-xl text-gms" >
                            Download Brochure
                        </p>
                    </Link>
                </div>
            </div>
            <div className="lg:w-2/3 px-10 flex flex-col gap-y-10" >
                <div>
                    <p className="text-2xl font-sans" >
                        Global Marketing Services [GMS] is a leading solution provider for your engineering and product development requirements.
                    </p>
                    <p className="text-lg text-gray-700 mt-4" >
                        Our commitment to quality drives us to offer dependable services and premium goods for the equipment and device manufacturing industry as well as research institutions. GMS was founded in 2001 and started its operations in Bangalore. With the help of our resources and highly-qualified team of professionals, we offer a one-stop shop and comprehensive R&D solution, from ideation and concept development to prototyping and the adoption of agile production methods.

                        <br /><br />
                        Thanks to the consistent efforts of our leadership and devoted teams, who have helped towards the adoption of cutting-edge technological solutions. We have significantly expanded production capabilities and established a dependable supply chain. The IITs, ISRO, DRDO, Department of Atomic Enerfy (DAE), CSIR and numerous significant public and private organizations like Bharat Electronics [BEL), etc. are just a few of the labs and institutes where our solutions and equipment have been utilized.
                        <br /><br />
                        We have been successful for the past 20 years and these accomplishments driven by excellence were made possible by the robust connections we have with our clients and partners around the world, some of whom are the biggest names in the micro- and nanotechnology industry.
                        <br /><br />
                        By providing new and innovative solutions, we enable our customers from diverse industry backgrounds to meet their business objectives. Additionally, we are always working to make the most cutting-edge technology available to the Indian market. Today, we are committed to meeting all of your design and development needs with bespoke, turnkey solutions, with a particular emphasis on low-volume projects for the startup industry.
                        <br /><br />
                    </p>
                    <p className="text-3xl" >
                        SUCCESS FOR OUR CLIENTS IS SUCCESS FOR US.
                    </p>
                </div>
                <div>
                    <h2 className="text-gms text-4xl font-semibold" >Our Vision</h2>
                    <p className="text-lg mt-3 text-gray-700" >
                        We would like to position ourselves as a notable and key contributor to India's technological advancement.<br />
                        <br />
                        GMS will play a significant and important role in India's technological advancement. Our commitment towards quality and customer service will shape the future of GMS. With an increasing number of international partners, we hope to expand the availability of cutting-edge products and services in the Indian market.

                    </p>
                </div>
                <div>
                    <h2 className="text-gms text-4xl font-semibold" >Our Mission</h2>
                    <p className="text-lg mt-3 text-gray-700" >
                        To design, develop and deliver innovative technology-driven solutions that will accelerate research & development and address the low-to-high volume requirements of the countrys advanced microelectronic sector.
                    </p>
                </div>
                <div>
                    <h2 className="text-gms text-4xl font-semibold" >Our Values</h2>
                    <div className="flex flex-col mt-3 gap-y-3" >
                        {
                            ourValues.map((v, k) =>
                                <div key={k} >
                                    <p className="text-2xl font-semibold text-gray-600" >
                                        {v.title}
                                    </p>
                                    <p className="text-lg text-gray-700 mt-2" >
                                        {v.value}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Company;
