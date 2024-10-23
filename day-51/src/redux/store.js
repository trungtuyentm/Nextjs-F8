import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./services/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        [auth.reducerPath]: auth.reducer,
        authSlice: authSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware(), auth.middleware];
    },
});
setupListeners(store.dispatch);
