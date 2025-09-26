"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import OGP from "../OGP";
import ProductCard from "../ProductCard";


const SearchPage = ({
    initialQuery,
    products
}) => {
    const router = useRouter();
    const [q, setQ] = useState(initialQuery || "");
    const search  =(e) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(q)}`);
    };
    const handleInput = (e) => {
        setQ(e?.currentTarget.value);
    };
    return (
        <div className="font-bs" >
            <OGP image="" title={"Results for "+q} />
            <div className="mx-auto lg:container my-20 lg:px-8 px-4" >
                <form onSubmit={search} className="flex flex-row justify-center" >
                    <input autoFocus onChange={handleInput} value={q} placeholder="Search.." className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 h-16" type="text" />
                    <button type="submit" className="py-3 px-4 rounded-r-sm bg-gms h-18 text-center text-white flex p-auto" >
                        <svg className="h-6 inline-block w-6 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </form>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-3" >
                    {
                        products.map((p, k) => <ProductCard key={k} className="col-span-1" {...p} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default SearchPage;
