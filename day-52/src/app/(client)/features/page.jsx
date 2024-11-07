export const metadata = {
    title: "Tính năng | Mind-map Flow ",
    description: "Học tập hiệu quả với bản đồ tư duy",
};
export default function FeaturePage() {
    return (
        <section className="">
            <div className="container mx-auto px-10 py-10">
                <div className="text-center w-8/12 md:w-10/12 xs:w-full  mx-auto my-10">
                    <h1 className="text-[50px]  ">Feature</h1>
                    <p className=" text-2xl font-medium my-5 my-5 text-gray-600">
                        The main aim of creating FWR blocks is to help
                        designers, developers and agencies create websites and
                        web apps quickly and easily. Each and every block uses
                        minimal custom styling and is based on the utility first
                        Tailwind framework.
                    </p>
                    <button className="btn py-2 px-6 border-2 border-blue-500 text-blue-500  rounded-md text-lg hover:bg-blue-500 hover:text-white transition-all  ">
                        Learn More
                    </button>
                </div>
                <div className="list-feature  ">
                    <ul className="grid grid-cols-3 md:grid-cols-1 gap-10">
                        <li className="feature-item border-2 border-gray-200 px-6 py-10 text-center">
                            <i className="fa-solid text-violet-500 fa-pen-ruler"></i>
                            <h2 className="text-2xl font-medium my-5 ">
                                Fresh Design
                            </h2>
                            <p className="text-lg ">
                                FWR blocks bring in an air of fresh design with
                                their creative layouts and blocks, which are
                                easily customizable.
                            </p>
                        </li>
                        <li className="feature-item border-2 border-gray-200 px-8 py-10 text-center">
                            <i className="fa-solid fa-code  text-violet-500 "></i>
                            <h2 className="text-2xl font-medium my-5 ">
                                Clean Code
                            </h2>
                            <p className="text-lg ">
                                FWR blocks bring in an air of fresh design with
                                their creative layouts and blocks, which are
                                easily customizable.
                            </p>
                        </li>
                        <li className="feature-item border-2 border-gray-200 px-6 py-10 text-center">
                            <i className="fa-solid text-violet-500 fa-wrench"></i>
                            <h2 className="text-2xl font-medium my-5 ">
                                Perfect Tool
                            </h2>
                            <p className="text-lg ">
                                FWR blocks bring in an air of fresh design with
                                their creative layouts and blocks, which are
                                easily customizable.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
