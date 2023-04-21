import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import backgroundReducer, { BackgroundState } from "./features/background.reducer";
import clockReducer, { ClockState } from "./features/clock.reducer";
import weatherReducer, { WeatherState } from "./features/weather.reducer";

export type RootState = {
    clock: ClockState;
    weather: WeatherState;
    background: BackgroundState;
}


export const store = configureStore({
    reducer: {
        clock: clockReducer,
        weather: weatherReducer,
        background: backgroundReducer,
    }
})

// const addDynamicReducer = (reducer: Reducer) => {
//     const combinedRedducers = combineReducers({
//         ...store.getState(),
//         [reducer.name]: reducer
//     });
// }