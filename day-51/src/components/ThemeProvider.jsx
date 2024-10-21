"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export function ThemeProvider({ children, ...props }) {
    return (
        <NextUIProvider>
            <NextThemesProvider {...props}>{children}</NextThemesProvider>
        </NextUIProvider>
    );
}
