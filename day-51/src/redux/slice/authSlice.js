import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
};
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setStatusLogin: (state, action) => {
            state.isLogin = action.payload;
        },
    },
});
export const { setStatusLogin } = authSlice.actions;
export default authSlice;
