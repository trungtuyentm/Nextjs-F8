import { dataFooter } from "./dataFooter";
import "./footer.css";
export default function Footer() {
    return (
        <footer className="bg-[#f3f4f6] py-14 px-5">
            <div className=" mx-auto   ">
                <div className="footer-up flex w-full md:flex-wrap md:gap-y-10 xs:justify-center  ">
                    {dataFooter.map((item, index) => (
                        <div
                            className="item flex flex-col basis-1/6 xs:basis-1/2 md:basis-1/3  px-4"
                            key={index}
                        >
                            <h2 className="title text-xl font-semibold mb-4 text-nowrap">
                                {item.title}
                            </h2>
                            {item.link.map((item, index) => (
                                <a
                                    href="#!"
                                    className="link mt-2 hover:underline hover:text-[#6b21a8] w-fit hover:translate-x-3 transition-all"
                                    key={index}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="stay-connect basis-1/6 xs:basis-1/2 md:basis-1/3  px-4 mx-auto ">
                        <h2 className="title text-xl font-semibold text-nowrap mb-5">
                            Stay Connected
                        </h2>
                        <div className="gr-social flex gap-x-2 ">
                            <a
                                href="#!"
                                className="hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:border-2"
                            >
                                <i className="fa-brands fa-facebook "></i>
                            </a>
                            <a
                                href="#!"
                                className="hover:bg-[#60a5fa] hover:text-white hover:border-[#60a5fa] hover:border-2"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                                href="#!"
                                className="hover:bg-[#dc2626] hover:text-white hover:border-[#dc2626] hover:border-2"
                            >
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-down flex justify-between mt-14 pt-14 border-t border-gray-200 flex-wrap sm:gap-y-10">
                    <div className="item flex px-4">
                        <h2 className="title text-md font-semibold">FWR</h2>
                    </div>
                    <div className="item flex flex-col px-4">
                        <h2 className="title text-md font-semibold mb-2">
                            Address
                        </h2>
                        <span className="text-sm">123 6th St.</span>
                        <span className="text-sm ">Melbourne, FL 32904</span>
                    </div>
                    <div className="item flex flex-col px-4">
                        <h2 className="title text-md font-semibold mb-2">
                            Free Resources
                        </h2>
                        <p className="text-sm">
                            Use our HTML blocks for{" "}
                            <span className="text-[#6b21a8] font-semibold">
                                FREE
                            </span>
                            .
                        </p>
                        <span className="text-sm italic ">
                            All are MIT License
                        </span>
                    </div>
                    <div className="item  px-4">
                        <button className="px-4 py-2 rounded-md bg-[#6b21a8] text-white ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
