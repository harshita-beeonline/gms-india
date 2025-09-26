"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "../store";

const MASTER_CATEGORY_SLUGS = new Set([
  "equipment",
  "components",
  "materials",
]);

const N = ({
    name,
    category_self_rel,
    slug,
    skipName
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="my-1" >
            <div className="flex justify-between px-2 py-1" >
                {!skipName && (category_self_rel && category_self_rel.length > 0 ?
                    <p onClick={() => { setOpen(!open) }} className="block w-full cursor-pointer">
                        {name}
                    </p>
                    :
                    <Link replace href={`/category/${slug}`} className="block w-full">
                        {name}
                    </Link>
                )
                }
                {
                    !skipName && category_self_rel && category_self_rel.length > 0 &&
                    <button onClick={() => { setOpen(!open) }} className="block w-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={` h-6 w-6 ml-auto ${open ? "rotate-180" : ""} `}>
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                }
            </div>

            {
                category_self_rel && category_self_rel.length > 0 &&
                category_self_rel.map((x, k) =>
                    <div key={k} className={` ml-3 ${open || skipName ? "block" : "hidden"} `} >
                        <div className="flex flex-col" >
                            <N name={x.name} slug={x.slug} category_self_rel={x.category_self_rel} skipName={false} />
                        </div>
                    </div>
                )
            }

        </div>
    );
}

const CategoryTree = () => {
    const { categoryTree, categoryTreeDisplay, categoryTreeDisplayChange } =
        useAppStore((state) => ({
            categoryTree: state.categoryTree,
            categoryTreeDisplay: state.categoryTreeDisplay,
            categoryTreeDisplayChange: state.categoryTreeDisplayChange,
        }));

    const masterCategories = useMemo(() => {
        if (!Array.isArray(categoryTree)) {
            return [];
        }

        const explicitMasters = categoryTree.filter((cat) =>
            MASTER_CATEGORY_SLUGS.has(cat.slug)
        );

        if (explicitMasters.length > 0) {
            return explicitMasters;
        }

        return categoryTree.filter((cat) => {
            if (!cat.cat_rel_key) {
                return true;
            }
            if (Array.isArray(cat.cat_rel_key)) {
                return cat.cat_rel_key.length === 0;
            }
            return false;
        });
    }, [categoryTree]);

    useEffect(() => {
        if (
            masterCategories.length > 0 &&
            !masterCategories.some((cat) => cat.slug === categoryTreeDisplay)
        ) {
            categoryTreeDisplayChange(masterCategories[0].slug);
        }
    }, [masterCategories, categoryTreeDisplay, categoryTreeDisplayChange]);

    if (masterCategories.length === 0) {
        return null;
    }

    const activeCategory =
        masterCategories.find((cat) => cat.slug === categoryTreeDisplay) ||
        masterCategories[0];

    return (
        <div className="shadow-md" >
            <div className="flex" >
                {
                    masterCategories.map((c) => (
                        <Link
                            href={`/category/${c.slug}`}
                            key={c.slug}
                            onClick={() => {
                                categoryTreeDisplayChange(c.slug);
                            }}
                            className={`p-2 block ${categoryTreeDisplay === c.slug ? "bg-gms text-white" : "bg-white text-gms"} w-1/3 text-center`}
                        >
                            {c.name}
                        </Link>
                    ))
                }
            </div>
            <div className="bg-gms text-white" >
                <div className="ml-2 pr-6 h-screen overflow-y-scroll" >
                    <N {...activeCategory} skipName={true} />
                </div>
            </div>

        </div>

    );
};

export default CategoryTree;
