import { ImageApi } from "./image-api";

const TestApi = {
    ...ImageApi,
    reducers: {
        [ImageApi.reducerPath]: ImageApi.reducer,
    },
    middlewares: [
        ImageApi.middleware,
    ],
};

export default TestApi;
