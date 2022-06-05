import {combineReducers, configureStore} from "@reduxjs/toolkit";
import trackReducer from './reducers/trackSlice'
import artistReducer from './reducers/artistSlice'

const rootReducer = combineReducers({
    track: trackReducer,
    artist: artistReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
