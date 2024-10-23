"use client";
import React from "react";
import { signOut } from "next-auth/react";
import "./button.css";

export default function LogoutBtn({ dataLang }) {
    return (
        <button
            onClick={() => {
                signOut();
            }}
            className="logout bg-blue-500 rounded-lg px-6 h-full font-bold"
        >
            {dataLang.button.logOut}
        </button>
    );
}
