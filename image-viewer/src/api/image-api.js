import { createApi } from "@reduxjs/toolkit/query/react";
import { detectInvalids } from "./type-check";
import { baseQuery, baseTransform } from "./base-api";
import { ImageModel, ImagesModel } from "./model";

// Image Model
export const validateImage = (response) => {
    const errors = detectInvalids(response, ImageModel);
    errors && console.log(`Image Validation:\n${errors}`);

    return errors === "" ? undefined : errors;
};

// Images Model
export const validateImages = (response) => {
    const errors = detectInvalids(response, ImagesModel);
    errors && console.log(`Images Validation:\n${errors}`);

    return errors === "" ? undefined : errors;
};

// Api
export const tagTypes = { Image: "Image", Images: "Images" };
export const ImageApi = createApi({
    reducerPath: "ImageApi",
    baseQuery: baseQuery,
    tagTypes: [...Object.values(tagTypes)],
    endpoints: (builder) => ({

        getImages: builder.query({
            query: ({ params }) => ({
                url: `/api/images`,
                params,
            }),
            providesTags: [tagTypes.Images],
            transformResponse: (response) => baseTransform(response, validateImages),
        }),
    }),
});
