"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children, ...props }) {
    return (
        <Provider store={store}>
            <SessionProvider {...props}>{children}</SessionProvider>
        </Provider>
    );
}
