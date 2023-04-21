import { createSlice } from "@reduxjs/toolkit";

export interface BackgroundState {
    image: string;
    blur: string | number;
    opacity: number;
}

const initState: BackgroundState = {
    image: '/images/placeholder/background2.jpg',
    blur: 0,
    opacity: 1,
}

export const backgroundSlice = createSlice({
    initialState: initState,
    name: 'background',
    reducers: {
        // Change the background image
        updateBackgroundImage: (state, action) => {
            state.image = action.payload;
        },
        // Change the background blur
        updateBackgroundBlur: (state, action) => {
            state.blur = action.payload;
        },
        // Change the background opacity
        updateBackgroundOpacity: (state, action) => {
            state.opacity = action.payload;
        }
    }
});

export const { updateBackgroundImage, updateBackgroundBlur, updateBackgroundOpacity } = backgroundSlice.actions;

export default backgroundSlice.reducer;