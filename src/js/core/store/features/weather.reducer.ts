import { createSlice } from "@reduxjs/toolkit";
import { TemperatureUnit, WeatherCondition } from "../../components/weather/types/weather.type";
import { RootState } from "../store";

export interface WeatherState {
    location: string;
    temperature: number;
    condition: WeatherCondition;
    unit: TemperatureUnit;
}

const initState: WeatherState = {
    location: 'Los Angeles',
    temperature: 27,
    condition: WeatherCondition.PartlyCloudy,
    unit: 'metric',
}

const weatherSlice = createSlice({
    initialState: initState,
    name: 'weather',
    reducers: {
        // Change the location
        updateLocation: (state, action) => {
            state.location = action.payload;
        },
        // Change the temperature
        updateTemperature: (state, action) => {
            state.temperature = action.payload;
        },
        // Change the weather condition
        updateCondition: (state, action) => {
            state.condition = action.payload;
        },
        // Change the temperature unit
        updateUnit: (state, action) => {
            state.unit = action.payload;
        }
    }
})

/**
 * ACTIONS
 */
export const {  updateCondition, updateLocation, updateTemperature, updateUnit } = weatherSlice.actions;
/**
 * REDUCER
 */
export default weatherSlice.reducer;