import { NextResponse } from "next/server";
import { i18n } from "../i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";

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
}
export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
