import { ThemeProvider } from "@/components/ThemeProvider";
import "@/assets/css/style.css";
import Header from "@/layouts/Header";

import { i18n } from "../../../i18n.config";
import Providers from "@/redux/Providers";
import { getServerSession } from "next-auth";

export const metadata = {
    title: "Profile",
    description: "Profile is a self-introduction page",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params: { lang } }) {
    const session = await getServerSession();
    return (
        <html
            lang={lang}
            suppressHydrationWarning
            className="transition-colors"
        >
            <head>
                <meta name="description" content={lang.description} />
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
            </head>

            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    themes={["light", "dark"]}
                >
                    <Providers session={session}>
                        <Header lang={lang} />
                        {children}
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}
