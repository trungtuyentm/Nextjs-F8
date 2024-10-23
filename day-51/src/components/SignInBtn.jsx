"use client";

import { signIn } from "next-auth/react";
import React from "react";
import "./signInBtn.css";

export function SignInGoogleBtn({ session }) {
    return (
        <button
            className="google bg-yellow-500 text-white rounded-lg px-6 py-2  "
            onClick={() => signIn("google")}
        >
            <i className="bx bxl-google"></i> Đăng nhập Google ở đây
        </button>
    );
}

export function SignInGithubBtn() {
    return (
        <button
            className="github bg-yellow-500 text-white  rounded-lg px-6 py-2 "
            onClick={() => signIn("github")}
        >
            <i className="bx bxl-github"></i> Đăng nhập Github ở đây
        </button>
    );
}
