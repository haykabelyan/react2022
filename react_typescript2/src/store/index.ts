import { combineReducers, configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/productSlice"
import authReducer from "./slices/authSlice"

const rootReducer = combineReducers({
    product: productReducer,
    auth: authReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStare = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']