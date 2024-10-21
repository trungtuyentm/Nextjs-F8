"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
export default function ButtonTheme() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const buttonRef = useRef(null);

    const handleClick = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (buttonRef.current) {
            if (resolvedTheme === "light") {
                buttonRef.current.innerHTML = '<i class="bx bxs-moon"></i>';
            } else {
                buttonRef.current.innerHTML = '<i class="bx bxs-sun"></i>';
            }
        }
    }, [theme, resolvedTheme]);
    return (
        <button
            onClick={handleClick}
            ref={buttonRef}
            className="text-2xl"
        ></button>
    );
}
