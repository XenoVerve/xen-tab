import * as CSS from 'csstype';
import { createSlice } from "@reduxjs/toolkit";
import { AnalogClockGraduationSettings, AnalogClockHandSettings, BaseClockFaceProps, ClockDivider, ClockFaceProps, ClockType } from "../../components/clock/types/clock.type";
import {  FontFamily, FontSettings, FontWeight } from "../../types/font.type";
import { ThemeTypings, ResponsiveValue } from '@chakra-ui/react';

declare type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]> : ResponsiveValue<CSSType>;

export interface ClockState {
    clockType: ClockType;
    clockProperty: {
        base: BaseClockFaceProps,
        analog: ClockFaceProps & {
            hourHand: AnalogClockHandSettings,
            minuteHand: AnalogClockHandSettings,
            secondHand: AnalogClockHandSettings,
            graduations: {
                major: AnalogClockGraduationSettings,
                minor: AnalogClockGraduationSettings & {
                    density: 24 | 36;
                },
            },
            borderColor: string,
            dotColor?: string,
        },
        circle: ClockFaceProps & {
            font: Partial<FontSettings> & {
                sizeWithSeconds: string,
            },
            // Font settings if seconds are displayed
            hourFont?: Partial<FontSettings>,
            minuteFont?: Partial<FontSettings>,
            secondsFont?: Partial<FontSettings>,
            trackColor: string,
            progressColor: string,
            isCapRound?: boolean,
            showProgress?: boolean,
            size: number,
            thickness: number,
            showSeconds?: boolean,
            flashingDots?: boolean,
        },
        vertical: ClockFaceProps & {
            hourFont: Partial<FontSettings>,
            minuteFont: Partial<FontSettings>,
            timeSpacing: string,
            letterSpacing: number,
            marginBottom: number,
        }
    }
}

const initState: ClockState = {
    clockType: ClockType.Vertical,
    clockProperty: {
        base: {
            font: {
                size: '8rem',
                color: 'white',
                weight: FontWeight.Semibold,
            },
            divider: {
                width: '75%',
                borderRadius: 'full',
                borderWidth: 5,
                color: 'white',
                opacity: 1,
                marginBottom: 5,
            }
        },
        analog: {
            hourHand: {
                length: 5,
                thickness: 5,
                opacity: 1,
                isVisible: true,
                smoothTransition: false,
            },
            minuteHand: {
                length: 3,
                thickness: 5,
                opacity: 0.8,
                isVisible: true,
                smoothTransition: false,
            },
            secondHand: {
                length: 2,
                thickness: 5,
                opacity: 0.5,
                isVisible: true,
                smoothTransition: false,
            },
            graduations: {
                major: {
                    isVisible: true,
                    height: 5,
                    width: 7,
                    opacity: 1,
                    font: {
                        size: '2rem',
                        color: 'white',
                    }
                },
                minor: {
                    isVisible: false,
                    height: 5,
                    width: 5,
                    density: 24,
                    opacity: 1
                },
            },
            borderColor: 'white',
        },
        circle: {
            font: {
                //TODO: Limit font size relative to the clock size
                size: '5rem', // ratio circle size : font size => 330 : 5rem (80px) = 4.125 : 1
                sizeWithSeconds: '3rem',
                color: 'white',
                weight: FontWeight.Semibold,
                // shadow: '0 0 20px rgba(0, 0, 0, 0.3)'
            },
            hourFont: {
                // color: 'red',
            },
            minuteFont: {
                // color: 'white',
            },
            secondsFont: {
                // color: 'red',
                // size: '3rem',
            },
            trackColor: 'white',
            progressColor: '#35E899',
            showProgress: true,
            showSeconds: true,
            size: 330,
            thickness: 4,
            flashingDots: false,
        },
        vertical: {
            hourFont: {
                // color: 'red',
            },
            minuteFont: {
                // color: 'green.400',
            },
            timeSpacing: '30px',
            divider: {
                width: '50%',
                borderWidth: 3,
            },
            letterSpacing: 0,
            marginBottom: 8,
        }
    },
};

export const clockSlice = createSlice({
    initialState: initState,
    name: 'clock',
    reducers: {
        // Change the clock type
        updateClockType: (state, action) => {
            state.clockType = action.payload;
        }
    },
})

export const { updateClockType } = clockSlice.actions;

export default clockSlice.reducer;