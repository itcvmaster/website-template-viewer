import { combineReducers, configureStore } from "@reduxjs/toolkit";

import TestApi from "api";
import Reducer, { initialState } from "./reducer";

const combinedReducer = combineReducers({
    app: Reducer,
    ...TestApi.reducers,
});

const preloadedState = {
    app: initialState,
};

const apiMiddlewares = TestApi.middlewares;

const store = configureStore({
    reducer: combinedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddlewares),
});

export default store;
