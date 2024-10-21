/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                light: {
                    primary: {
                        100: "#0077C2",
                        200: "#59a5f5",
                        300: "#c8ffff",
                    },
                    accent: {
                        100: "#00BFFF",
                        200: "#00619a",
                    },
                    100: "#FFFFFF",
                    200: "#f5f5f5",
                    300: "#cccccc",
                    400: "rgba(204, 204, 204, 0.9)",
                },
                dark: {
                    primary: {
                        100: "#2563eb",
                        200: "#598EF3",
                        300: "#D3E6FE",
                    },
                    accent: {
                        100: "#006fff",
                        200: "#e1ffff",
                    },
                    100: "#1e293b",
                    200: "#334155",
                    300: "#475569",
                    400: "rgba(71, 85, 105, 0.9)",
                },
            },
        },
        textColor: {
            light: {
                100: "#333333",
                200: "#5c5c5c",
            },
            dark: {
                100: "#cbd5e1",
                200: "#94a3b8",
            },
            100: "rgb(9, 181, 244)",
        },
    },
    plugins: [
        nextui({
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {
                        background: "#fff",
                        foreground: "#333333",
                    }, // light theme colors
                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {
                        background: "#1e293b",
                        foreground: "#cbd5e1",
                    },
                }, // dark theme colors
            },
        }),
    ],
};
