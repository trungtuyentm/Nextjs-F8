"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ButtonLanguage({ lang }) {
    const pathName = usePathname();
    const route = useRouter();
    const nextLang = lang === "vi" ? "en" : "vi";

    const handleClick = async (e) => {
        if (!pathName) return "/";
        route.push("/" + nextLang + pathName.replace("/" + lang, ""), {
            scroll: false,
        });
    };

    return (
        <button
            className="px-3 pl-1 w-8 rounded-md border-black text-xl flex justify-center items-center"
            onClick={handleClick}
        >
            {nextLang}
        </button>
    );
}
