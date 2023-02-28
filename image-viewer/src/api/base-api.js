import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * A base query of all api requests to be used all across the app. 
 */
export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: async (headers, { getState }) => {

        // TODO: Actually, we don't need this, as there is 
        // no authentication feature in this test. But 
        // I added the following code to show an example.
        const state = getState();
        const accessToken = state.user?.accessToken;

        // Add Bearere Token to request headers
        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }

        return headers;
    },
});
/**
 * 
 * @param {*} response A response from backend
 * @param {*} validate A validation function to see if there is any mismatch between Frontend data model and response
 * @param {*} transformData A function to transform response to a data model to be used in Frontend
 * @returns 
 */
export const baseTransform = (response, validate, transformData) => {
    // Validation Checking & Error Handling
    const error = validate ? validate(response) : undefined;
    const transform = transformData ? transformData(response, error) : response;

    return transform;
};
