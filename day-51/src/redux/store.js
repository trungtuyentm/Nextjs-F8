import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {},
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware()];
    },
});
setupListeners(store.dispatch);
