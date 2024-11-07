import Header from "@/components/Header/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Roboto } from "next/font/google";
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",

    icons: [
        {
            url: "https://cdn.icon-icons.com/icons2/1508/PNG/512/mindmeister_103931.png",
            type: "image/png",
            sizes: "32x32",
            purpose: "any maskable",
        },
    ],
};
const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
});
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                />
            </head>

            <UserProvider>
                <body className={roboto.className + " w-full"}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <ToastContainer autoClose={1000} />
                </body>
            </UserProvider>
        </html>
    );
}
