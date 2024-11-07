export const metadata = {
    title: "Bảng giá | Mind-map Flow ",
    description: "Học tập hiệu quả với bản đồ tư duy",
};
export default function PricePage() {
    return (
        <section className="">
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h1 className="text-[55px] font-medium mb-5">
                        <span className="text-indigo-600">Flexible </span>Plan
                    </h1>
                    <p className="text-2xl ">
                        Choose a plan that works best for you and your team.
                    </p>
                </div>
                <div className="mt-16 px-16 sm:px-10">
                    <ul className="flex flex-row justify-between items-center lg:flex-col lg:items-start lg:gap-y-10">
                        <li className="feature-item w-full flex-1 mt-8 p-8 order-1 bg-white shadow-xl rounded-3xl lg:w-full lg:order-2 lg:rounded-r-none sm:w-full">
                            <div className="item-header mb-7 pb-7 flex items-center border-b border-gray-300">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                                    alt=""
                                    className="rounded-3xl w-20 h-20"
                                ></img>
                                <div className="ml-5">
                                    <span className="block text-2xl font-semibold">
                                        Basic
                                    </span>
                                    <span>
                                        <span className="font-medium text-gray-500 text-xl align-top">
                                            $ 
                                        </span>
                                        <span className="text-3xl font-bold">
                                            10{" "}
                                        </span>
                                    </span>
                                    <span className="text-gray-500 font-medium">
                                        / user
                                    </span>
                                </div>
                            </div>
                            <ul className="mb-7 font-medium text-gray-500">
                                <li className="flex text-lg mb-2">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        Get started with{" "}
                                        <span className="text-black">
                                            messaging
                                        </span>
                                    </span>
                                </li>
                                <li className="flex text-lg mb-2">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        Flexible{" "}
                                        <span className="text-black">
                                            team meetings
                                        </span>
                                    </span>
                                </li>
                                <li className="flex text-lg">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        <span className="text-black">5 TB</span>{" "}
                                        cloud storage
                                    </span>
                                </li>
                            </ul>
                            <button className="flex w-full justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                                Choose Plan
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                    className="ml-2"
                                    alt="Demo"
                                ></img>
                            </button>
                        </li>
                        <li className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 lg:w-full lg:order-2 lg:mt-0 sm:w-full">
                            <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                                    alt=""
                                    className="rounded-3xl w-20 h-20"
                                />
                                <div className="ml-5">
                                    <span className="block text-3xl font-semibold text-white">
                                        Startup
                                    </span>
                                    <span>
                                        <span className="font-medium text-xl align-top">
                                            $ 
                                        </span>
                                        <span className="text-3xl font-bold text-white">
                                            24{" "}
                                        </span>
                                    </span>
                                    <span className="font-medium">/ user</span>
                                </div>
                            </div>
                            <ul className="mb-10 font-medium text-xl">
                                <li className="flex mb-6">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        All features in{" "}
                                        <span className="text-white">
                                            Basic
                                        </span>
                                    </span>
                                </li>
                                <li className="flex mb-6">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        Flexible{" "}
                                        <span className="text-white">
                                            call scheduling
                                        </span>
                                    </span>
                                </li>
                                <li className="flex">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        <span className="text-white">
                                            15 TB
                                        </span>{" "}
                                        cloud storage
                                    </span>
                                </li>
                            </ul>
                            <button className="w-full flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl">
                                Choose Plan
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                    className="ml-2"
                                    alt="Demo"
                                />
                            </button>
                        </li>
                        <li className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl  lg:w-full lg:order-3 lg:rounded-l-none sm:w-full">
                            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                                    alt=""
                                    className="rounded-3xl w-20 h-20"
                                />
                                <div className="ml-5">
                                    <span className="block text-2xl font-semibold">
                                        Enterprise
                                    </span>
                                    <span>
                                        <span className="font-medium text-gray-500 text-xl align-top">
                                            $ 
                                        </span>
                                        <span className="text-3xl font-bold">
                                            35{" "}
                                        </span>
                                    </span>
                                    <span className="text-gray-500 font-medium">
                                        / user
                                    </span>
                                </div>
                            </div>
                            <ul className="mb-7 font-medium text-gray-500">
                                <li className="flex text-lg mb-2">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        All features in{" "}
                                        <span className="text-black">
                                            Startup
                                        </span>
                                    </span>
                                </li>
                                <li className="flex text-lg mb-2">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        Growth{" "}
                                        <span className="text-black">
                                            oriented
                                        </span>
                                    </span>
                                </li>
                                <li className="flex text-lg">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                                        alt="Demo"
                                    />
                                    <span className="ml-3">
                                        <span className="text-black">
                                            Unlimited
                                        </span>{" "}
                                        cloud storage
                                    </span>
                                </li>
                            </ul>
                            <button className="flex w-full justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
                                Choose Plan
                                <img
                                    src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                    className="ml-2"
                                    alt="Demo"
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
