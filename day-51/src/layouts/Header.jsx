"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import ButtonLanguage from "@/components/ui/ButtonLanguage";
import ButtonTheme from "@/components/ui/ButtonTheme";

export default function Header({ lang }) {
    const headerRef = useRef(null);
    const headerInnerRef = useRef(null);
    useLayoutEffect(() => {
        if (headerInnerRef.current && headerRef.current) {
            headerRef.current.style.height = `${headerInnerRef.current.clientHeight}px`;
        }
    }, [headerInnerRef.current, headerRef.current]);
    return (
        <header ref={headerRef} className=" relative z-1">
            <div
                className="fixed inset-x-0 top-0 shadow-md z-10 bg-light-400 transition-colors dark:bg-dark-400"
                ref={headerInnerRef}
            >
                <nav className="max-w-7xl xl:mx-auto container flex justify-between items-center py-4 px-2 z-2">
                    <ul className="flex gap-6 items-center font-bold">
                        <li>
                            <Link href={`/${lang}`}>
                                <p className="inline-block text-2xl text-100">
                                    Trung Tuyển
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}`}>Home</Link>
                        </li>
                    </ul>
                    <ul className="flex gap-4 items-center">
                        <li>
                            <Link
                                href="https://react.dev/"
                                target="_blank"
                                className="text-2xl"
                            >
                                <i className="bx bxl-react"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="text-2xl"
                            >
                                <i className="bx bxl-facebook-circle"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/trungtuyentm"
                                target="_blank"
                                className="text-2xl"
                            >
                                <i className="bx bxl-github"></i>
                            </Link>
                        </li>
                        <li>
                            <ButtonTheme lang={lang} />
                        </li>
                        <li>
                            <ButtonLanguage lang={lang} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
