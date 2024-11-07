/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xxl: { max: "1599.98px" }, // Max-width for screens smaller than 1599px
            xl: { max: "1279.98px" }, // Max-width for screens smaller than 1280px
            lg: { max: "1023.98px" }, // Max-width for screens smaller than 1024px
            md: { max: "767.98px" }, // Max-width for screens smaller than 768px
            sm: { max: "639.98px" }, // Max-width for screens smaller than 640px
            xs: { max: "576.98px" }, // Max-width for screens smaller than 576px
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
            },
        },
    },
    plugins: [],
};
