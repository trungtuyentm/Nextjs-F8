import { NextResponse } from "next/server";
import { i18n } from "../i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { getToken } from "next-auth/jwt";

function getLocale(lang) {
    const locales = i18n.locales;

    const locale = matchLocale(lang, locales, i18n.defaultLocale);

    return locale;
}

export default async function middleware(request) {
    const lang = request.cookies.get("lang")?.value || i18n.defaultLocale;
    const { pathname } = request.nextUrl;

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = getLocale(lang);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        );
    }
    const jwt = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
        cookieName: process.env.NEXT_PUBLIC_SESSION,
    });

    if (pathname.startsWith(`/${lang}/auth`)) {
        if (jwt) {
            return NextResponse.redirect(
                new URL(`/${lang}/profile`, request.url)
            );
        } else {
            const lang = pathname.startsWith("/vi/auth") ? "vi" : "en";
            const response = NextResponse.next();
            response.cookies.set("lang", lang || i18n.defaultLocale);
            return response;
        }
    }
    if (pathname.startsWith(`/${lang}/profile`)) {
        if (!jwt) {
            const response = NextResponse.redirect(
                new URL(`/${lang}/auth`, request.url)
            );
            response.cookies.set("lang", lang || i18n.defaultLocale);
            return response;
        }
    }
}
export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
