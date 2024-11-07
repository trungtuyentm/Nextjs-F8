"use client";
import Link from "next/link";
import style from "./header.module.css";
import { useState } from "react";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Header() {
    const { user, error, isLoading } = useUser();
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const active = (path) => {
        return pathname === path
            ? style["nav-link-active"]
            : "hover:bg-[#d1d9e96a]";
    };
    const handleClick = () => {
        setOpen(!open);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <header className="header py-5">
            <div className="w-full lg:px-5 md:px-20 sm:px-10 px-5 h-18 mx-auto flex justify-between items-center">
                <h1 className="font-semibold text-[#4f46e5] text-2xl">
                    <Link href="/">Mindmap Flow</Link>
                </h1>
                <span
                    className={clsx(
                        "overlay bg-[#d1d9e95a]  fixed top-0 left-0 w-full h-screen z-10",
                        open ? "md:block" : "hidden"
                    )}
                    onClick={handleClick}
                ></span>
                <button
                    className="hidden border border-[#4f46e5] px-2 py-1 rounded active:bg-[#4f46e5] focus:outline-none focus:ring md:block "
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <nav
                    className={clsx(
                        "nav gap-4 items-center flex md:flex-col md:border border-r-[#4f46e5fa] md:bg-[#e0e7fff0] md:bg-[#e0e7fff0] md:rounded-md md:fixed md:top-0 md:left-0 md:z-20 md:h-screen md:w-1/3 md:px-5 md:py-10 sm:w-1/2 ",
                        open ? "md:translate-x-0" : "md:-translate-x-[101%]",
                        "transition-transform duration-300 ease-in-out"
                    )}
                >
                    <Link
                        href="/"
                        className={clsx(style["nav-link"], active("/"))}
                    >
                        Trang chủ
                    </Link>
                    <Link
                        href="/about "
                        className={clsx(style["nav-link"], active("/about"))}
                    >
                        Giới thiệu
                    </Link>
                    <Link
                        href="/features"
                        className={clsx(style["nav-link"], active("/features"))}
                    >
                        Tính năng
                    </Link>
                    <Link
                        href="/price "
                        className={clsx(style["nav-link"], active("/price"))}
                    >
                        Bảng giá
                    </Link>
                    <Link
                        href="/contact"
                        className={clsx(style["nav-link"], active("/contact"))}
                    >
                        Liên hệ
                    </Link>
                    {user && (
                        <p className="p-2 lg:px-4 md:mx-2 text-green-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-green-600 transition-colors duration-300 font-bold">
                            Hi, {user.name || user.nickname}
                        </p>
                    )}

                    <a
                        href={user ? "/my-Mindmap" : "/api/auth/login"}
                        className={clsx(
                            style["nav-action"],
                            "hover:bg-[#c3c1f579]"
                        )}
                    >
                        {user ? "Mind Map" : "Đăng nhập"}
                    </a>

                    <a
                        href={user ? "/api/auth/logout" : "/api/auth/login"}
                        className={clsx(
                            style["nav-action"],
                            style["sign-up"],
                            "hover:bg-[#c3c1f579]"
                        )}
                    >
                        {user ? "Đăng xuất" : "Đăng ký"}
                    </a>
                </nav>
            </div>
        </header>
    );
}
