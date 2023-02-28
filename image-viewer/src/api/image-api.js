import { createApi } from "@reduxjs/toolkit/query/react";
import { detectInvalids } from "utils/type-check";
import { baseQuery, baseTransform } from "./base-api";
import { ActivityModel, ActivitysModel } from "./models";

// Activity Model
export const transformActivity = (response) => response;
export const validateActivity = (response) => {
    const errors = detectInvalids(response, ActivityModel);
    errors && console.log(`Activity Validation:\n${errors}`);

    return errors === "" ? undefined : errors;
};

// Activitys Model
export const transformActivitys = (response, errors) => {
    return {
        errors,
        activitys: response.data,
        activitysCount: response.count,
    };
};
export const validateActivitys = (response) => {
    const errors = detectInvalids(response, ActivitysModel);
    errors && console.log(`Activitys Validation:\n${errors}`);

    return errors === "" ? undefined : errors;
};

// Api
export const tagTypes = { Activity: "Activity", Activitys: "Activitys" };
export const ActivityApi = createApi({
    reducerPath: "ActivityApi",
    baseQuery: baseQuery,
    tagTypes: [...Object.values(tagTypes)],
    endpoints: (builder) => ({

        getActivitys: builder.query({
            query: ({ params }) => ({
                url: `/admin/activitys`,
                params,
            }),
            providesTags: [tagTypes.Activitys],
            transformResponse: (response) =>
                baseTransform(response, validateActivitys, transformActivitys),
        }),

        createActivity: builder.mutation({
            query: ({ payload }) => ({
                url: `/admin/activitys`,
                method: "POST",
                body: payload,
            }),
            invalidatesTags: [tagTypes.Activitys],
        }),

        searchActivitys: builder.query({
            query: ({ params, payload }) => ({
                url: `/admin/activitys/search`,
                method: "POST",
                params: params,
                body: payload,
            }),
            providesTags: [tagTypes.Activitys],
            transformResponse: (response) =>
                baseTransform(response, validateActivitys, transformActivitys),
        }),

        getActivity: builder.query({
            query: ({ activityId }) => ({
                url: `/admin/activitys/${activityId}`,
            }),
            providesTags: [tagTypes.Activitys],
            transformResponse: (response) =>
                baseTransform(response, validateActivity, transformActivity),
        }),

        updateActivity: builder.mutation({
            query: ({ activityId, payload }) => ({
                url: `/admin/activitys/${activityId}`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: [tagTypes.Activitys],
            transformResponse: (response) =>
                baseTransform(response, validateActivity, transformActivity),
        }),

    }),
});
