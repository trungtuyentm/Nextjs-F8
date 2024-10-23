import React from "react";
import Profile from "./components/Profile";
import { getDictionary } from "@/Utils/dictionary";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export default async function ProfileRoute({ params: { lang } }) {
    const dataLang = await getDictionary(lang);
    const session = await getServerSession(authOptions);
    return (
        <main>
            <Profile dataLang={dataLang} session={session} />
        </main>
    );
}
