import { SignInGithubBtn, SignInGoogleBtn } from "@/components/SignInBtn";
import React from "react";

export const metadata = {
    title: "Đăng nhập / Đăng ký",
    description: "Profile is a self-introduction page",
};

export default async function Auth() {
    return (
        <>
            <main className="h-screen flex justify-center items-center">
                <div className="mb-[200px] px-[150px] py-10 rounded-xl border border-green-600 text-center ">
                    <h2 className="text-2xl font-bold">Đăng nhập</h2>
                    <div className="mt-10 min-h-[50px] font-bold hover:text-green-500">
                        <SignInGoogleBtn />
                    </div>
                    <div className="mt-3 min-h-[50px] font-bold">
                        <SignInGithubBtn />
                    </div>
                </div>
            </main>
        </>
    );
}
