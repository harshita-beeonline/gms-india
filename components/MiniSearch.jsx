"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const MiniSearch = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            router.push(`/search?q=${encodeURI(search)}`);
        }} className="my-3 flex">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" required name="search" id="search" className="block rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-full" placeholder="Search" />
            <button type="submit" className="bg-gms hover:bg-indigo-900 py-1 px-2 text-gray-200 rounded-r-md " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </form>
    );
};

export default MiniSearch;
