import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

/**
 * There is no need to use Redux in this test.
 * This is just a placeholder
 */
const appSlice = createSlice({
    name: "app", // the way it will look in the store
    initialState: initialState,
    reducers: {
        initApp(_state, _action) {},
    },
});

export const { clearApp } = appSlice.actions;
export default appSlice.reducer;
