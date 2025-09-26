"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { posthog } from "posthog-js";
import { useState } from "react";

const Contact = ({
    buttonColor = "gms"
}) => {
    const pathname = usePathname();
    const [email, setEmail] = useState("");
    const handleSubmit = () => {
        posthog.people.set({ email: email });
    };
    const [verified, setVerified] = useState(false);

    return (
        <div className="overflow-x-hidden" >
            <div className="flex flex-col gap-y-4 lg:flex-row lg:px-20 lg:py-6 p-6 gap-x-10" >
                <motion.div initial={{ opacity: 0, translateX: -50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateX: 0 }} className="lg:w-1/2" >
                    <h2 className="text-5xl font-bs" >
                        Get in touch with our experts!
                    </h2>
                    <p className="mt-4" >
                        Welcome to Global Marketing Services (GMS). We are a leading solution provider based out of Bangalore, offering a wide range of equipment, individual components, and materials for EV Batteries, PCB's, Thin Films, Semiconductors, Microelectronics, MEMS, LED, and Solar applications for device manufacturing and research organizations in India. Over the years, GMS has been a part of various prestigious projects in India, which has resulted in our team gaining significant experience and exposure to some of the best semiconductor technologies, products, and processes.
                    </p>
                </motion.div>

                <motion.div className="lg:w-1/2 lg:mt-3 overflow-x-hidden" >
                    <form onSubmit={handleSubmit} action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" className="flex flex-col gap-y-3" >

                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                Full Name*
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    required
                                    pattern="[A-Za-z'\s]{1,20}"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company*
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    required
                                    pattern="[A-Za-z'\s]{1,20}"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email*
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={e => { setEmail(e.target.value) }}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number*
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    required
                                    pattern="^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <div className="mt-1">
                                <textarea
                                    rows={4}
                                    name="description"
                                    id="description"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                        <input id="00N7F00000Iu6TF" name="00N7F00000Iu6TF" title="Customer Segment" type="hidden" value="About Us" />
                        <input id="lead_source" name="lead_source" title="Lead Source" type="hidden" value="Website" />
                        <input id="00NC5000000QKdV" name="00NC5000000QKdV" type="hidden" value="1" />
                        <input type="hidden" name="oid" value="00D7F000002DPId" />
                        <input type="hidden" name="retURL" value={`https://gms-india.com${pathname}`} />

                        {
                            !verified && <HCaptcha theme="light" onVerify={() => { setVerified(true) }} sitekey="662d2fc6-49e5-47f6-b2e1-a7844a3dab7a" />
                        }

                        <button className={`inline-flex items-center rounded-md border border-transparent bg-${buttonColor} px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:w-1/5`} >
                            Submit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>

                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
