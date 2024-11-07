import {
    getSession,
    withMiddlewareAuthRequired,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
    const path = req.nextUrl.pathname;
    const idMap = path.replace("/my-Mindmap", "").replace("/", "");

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_MINDMAP}`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        let mindMap;
        let ownerId;
        let status = "";

        data.forEach((user) => {
            const foundMap = user.mindMapData.find(
                (map) => map.idMap === idMap
            );
            if (foundMap) {
                mindMap = foundMap;
                ownerId = user.id;
                status = mindMap.checkStatus;
            }
        });

        const session = await getSession(req);
        const user = session?.user;

        if (status === "private") {
            if (!user) {
                return NextResponse.redirect(
                    new URL("/api/auth/login", req.url)
                );
            }
            if (user.sub !== ownerId) {
                return NextResponse.redirect(new URL("/notFound", req.url));
            }
        } else if (path.includes("/my-Mindmap")) {
            if (!user) {
                return NextResponse.redirect(
                    new URL("/api/auth/login", req.url)
                );
            }
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Error in middleware:", error);
        return NextResponse.redirect(new URL("/error", req.url));
    }
};

export const config = {
    matcher: ["/my-Mindmap/:path*"],
};
