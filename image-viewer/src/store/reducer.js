import { createSlice } from "@reduxjs/toolkit";

export const initUser = {};

const appSlice = createSlice({
    name: "app", // the way it will look in the store
    initialState: initUser,
    reducers: {
        clearApp(state, action) {
            console.log("clear app data: ", state, action);
        },
    },
});

export const { clearApp } = appSlice.actions;
export default appSlice.reducer;
