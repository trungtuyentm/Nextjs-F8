import avatar from "../../assets/image/avt/avt.jpg";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/Utils/dictionary";

export default async function HomeRoute({ params: { lang } }) {
    const data = await getDictionary(lang);
    return (
        <main className="pb-10 pt-2">
            <div className="max-w-7xl xl:mx-auto container rounded-xl border-2 border-gray-200 mt-1.5 shadow-md bg-light-200 transition-colors dark:bg-dark-200 dark:border-transparent">
                <div className="w-full">
                    <h1 className="text-2xl text-center font-medium pt-3">
                        {data.name}
                    </h1>
                </div>
                <div className="p-3 flex justify-between">
                    <aside className="max-w-[300px] w-[300px]">
                        <figure className=" relative z-0 overflow-hidden m-2 p-4 rounded-full inline-block">
                            <div className=" absolute z-1 inset-5 rounded-full overflow-hidden">
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    className=" w-full z-0 rounded-full ease-in-out duration-400 hover:scale-[1.3]"
                                    width={0}
                                    priority
                                    height={0}
                                />
                            </div>
                            <Image
                                src={avatar}
                                width={0}
                                height={0}
                                priority
                                alt="avatar"
                                className=" w-full relative z-[-1] blur-lg dark:brightness-[0.7] rounded-full"
                            />
                        </figure>
                        <figcaption className=" text-center font-semibold">
                            Front-end developer
                        </figcaption>
                        <section>
                            <h2 className="mt-2 text-xl font-bold dark:text-100">
                                {data.mySkills.title}
                            </h2>
                            <ul className="mt-2">
                                <li className=" text-light-200 dark:text-dark-200 border-b-2 pb-1">
                                    <h3 className=" inline-block font-bold text-light-100 dark:text-100">
                                        {data.mySkills.workSkill.title}
                                    </h3>
                                    : {data.mySkills.workSkill.content}
                                </li>
                                <li className=" text-light-200 dark:text-dark-200">
                                    <h3 className=" inline-block font-bold text-light-100 dark:text-100 pt-1">
                                        {data.mySkills.otherSkill.title}
                                    </h3>
                                    : {data.mySkills.otherSkill.content}
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="mt-2 text-xl font-bold dark:text-100">
                                {data.Histories.title}
                            </h2>
                            <ul className="mt-2">
                                {data.Histories.content?.map((item) => {
                                    const find = Object.keys(item).find(
                                        (obj) => obj !== "id"
                                    );
                                    return (
                                        <li
                                            className=" text-light-200 dark:text-dark-200 border-b-2 pb-2 mt-1"
                                            key={item.id}
                                        >
                                            <h3 className=" inline-block font-bold text-light-100 dark:text-100">
                                                {find}
                                            </h3>
                                            : {item[find]}
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    </aside>
                    <div className=" max-w-[900px] w-full">
                        <section className=" border-b-2 pb-2">
                            <div>
                                <h2 className="mt-2 text-xl font-medium text-center">
                                    {data.contact.title}
                                </h2>
                            </div>
                            <ul className="mt-2">
                                <li>
                                    Phone:{" "}
                                    <Link
                                        href={`tel:${data.contact.content.phone}`}
                                        className=" text-100"
                                        target="_blank"
                                    >
                                        {data.contact.content.phone}
                                    </Link>
                                </li>
                                <li>
                                    Zalo:{" "}
                                    <Link
                                        href={data.contact.content.zalo}
                                        className=" text-100"
                                        target="_blank"
                                    >
                                        {data.contact.content.zalo}
                                    </Link>
                                </li>
                                <li>
                                    Email:{" "}
                                    <Link
                                        href={data.contact.content.email}
                                        className=" text-100"
                                        target="_blank"
                                    >
                                        {data.contact.content.email}
                                    </Link>
                                </li>
                                <li>
                                    Facebook:{" "}
                                    <Link
                                        href={data.contact.content.facebook}
                                        className=" text-100"
                                        target="_blank"
                                    >
                                        {data.contact.content.facebook}
                                    </Link>
                                </li>
                                <li>
                                    Github:{" "}
                                    <Link
                                        href={data.contact.content.github}
                                        className=" text-100"
                                        target="_blank"
                                    >
                                        {data.contact.content.github}
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <div className="mt-4 border-1.5 dark:border-transparent rounded-lg pt-2 px-5 shadow-inner dark:bg-dark-300">
                                <div>
                                    <h2 className="mt-2 text-xl font-medium text-center">
                                        {data.personalProject.title}
                                    </h2>
                                </div>
                                {data.personalProject?.content.map(
                                    (
                                        {
                                            id,
                                            title,
                                            describe,
                                            content,
                                            demo,
                                            code,
                                        },
                                        index
                                    ) => (
                                        <div
                                            className={`border-b-2 p-3`}
                                            key={id}
                                        >
                                            <h3 className=" text-xl">
                                                {title}
                                            </h3>
                                            <p className="text-md my-2">
                                                {describe} <br /> {content}
                                            </p>
                                            <div className="flex gap-3">
                                                <Link
                                                    href={demo}
                                                    className=" text-100"
                                                    target="_blank"
                                                >
                                                    Demo
                                                </Link>
                                                <Link
                                                    href={code}
                                                    className=" text-100"
                                                    target="_blank"
                                                >
                                                    Code
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                )}
                                <div className={`p-3`}>
                                    <Link
                                        href={data.contact?.content.github}
                                        className=" text-100"
                                        target="_blank"
                                    >
                                        {data.contact.content.github}
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className="mt-5">
                            <div>
                                <h2 className="mt-2 text-xl font-medium text-center">
                                    {data.myHobbies?.title}
                                </h2>
                            </div>
                            <ul className="mt-4 list-disc px-5 flex-col gap-y-3">
                                {data.myHobbies?.content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="p-3 max-w-full text-100 text-center">
                    © 2024 Fullstack.edu.vn F8. All rights reserved.
                </div>
            </div>
        </main>
    );
}
