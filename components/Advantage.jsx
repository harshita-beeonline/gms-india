"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// const genericContent = [
//     "GMS India brings extensive experience of over two decades in core underlying technologies which are now being adopted in multiple new industries for the manufacturing of various equipment and materials.",
//     "By bringing cutting edge technologies from world renowned manufacturers, GMS ensures you get the right solution to meet your production goals at the right cost and quality",
//     "From purchase order to delivery, from qualifying to automating for efficiency."
// ]

const defaultItems = [
    {
        title: "OPTIMIZED EFFICIENCY",
        content: `Managing new tech and next-gen systems can be an enduring difficulty for optimization. While our team of specialists develop ways to address this challenge for improved performance, companies can concentrate on other innovative challenges and growth opportunities.  To stay competitive, there is a pressing need to develop practices and solutions that can keep costs low and create reliable improvements for success.        `
    },
    {
        title: "ASSURED RELIABILITY",
        content: `Emerging technology places a lot of emphasis on reliability. We have been offering our clients dependable tools and infrastructure for more than 20 years, ranging from simple instruments to cutting-edge machinery that has significantly improved management and productivity. 
        `
    },
    {
        title: "MAXIMIZED OUTPUT",
        content: `We are stepping up to meet the market's pressing need for trustworthy suppliers and work diligently to provide solutions that satisfy your needs and, on occasions, even maximize them.         `
    }
]

const Advantage = ({
    active = "ev",
    activeFont = "white",
    inactiveFont = "ev-green",
    inactive = "white",
    items = defaultItems
}) => {
    const [ activeTab, setActiveTab ] = useState(0);

    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            {/* HEADERS */}
            <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }} className="flex flex-col lg:flex-row lg:gap-x-2 justify-evenly" >
                {
                    items.map((t, k) =>
                        <div onClick={()=>changeTab(k)} key={k} className={` uppercase hover:cursor-pointer text-xl lg:text-2xl w-full p-4 ${ k === activeTab ? `text-${activeFont} bg-${active} font-bold` : `text-${inactiveFont} bg-${inactive} ` } `} >
                            {t.title}
                        </div>
                        )
                }
            </motion.div>

            <motion.div initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, transition: { duration: 0.6 }, translateY: 0 }} className={`w-full mt-2 bg-${active}  p-10 text-${activeFont} text-lg`} >
                <p>
                    {items[activeTab].content}
                </p>
            </motion.div>

        </div>
    );
};

export default Advantage;
