import React from "react";
import Image from "next/image";
import homeImage from "../assets/images/so-do-tu-duy.webp";
import { dataHomePage } from "../utils/dataHomePage";
export const metadata = {
    title: "Mindmap Flow ",
    description: "Học tập hiệu quả với bản đồ tư duy",
};
export default function HomePage() {
    return (
        <section className=" bg-[#e0e7ff] py-10">
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-5 text-sky-500 [word-spacing:3px]">
                    Học tập hiệu quả với bản đồ tư duy
                </h2>
                <button className=" text-lg bg-[#4f46e5] mb-5 text-white px-5 py-2 rounded-full">
                    Sử dụng miễn phí
                </button>
                <div>
                    <Image
                        className="mx-auto"
                        src={homeImage}
                        width={672}
                        height={353}
                        alt="Mind map"
                    />
                </div>
                <div className="flex mt-20 sm:flex-col sm:gap-y-10 sm:items-center ">
                    {dataHomePage.map((item, index) => (
                        <div
                            key={index}
                            className=" relative item basis-1/3 px-3   after:content-[''] after:block after:absolute after:w-[80px] after:h-[1px] after:left-1/2 after:-top-1/4 after:-translate-x-1/2  after:bg-[#4f46e535] sm:w-8/12 sm:mx-auto "
                        >
                            <h3 className="text-xl font-medium  uppercase">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 mt-5">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
