import * as CSS from 'csstype';
import { ThemeTypings, ResponsiveValue } from "@chakra-ui/react";
import { FontSettings } from "../../../types/font.type";

declare type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]> : ResponsiveValue<CSSType>;

export enum ClockType {
    Digital = "Digital",
    Analog = "Analog",
    Circle = "Circle",
    Vertical = "Vertical",
    Indented = "Indented",
    BlurredDigital = "BlurredDigital",
}

export type AnalogClockHandSettings = {
    color?: string;
    length: number;
    thickness: number;
    opacity: number;
    isVisible: boolean;
    smoothTransition: boolean;
}

export type AnalogClockGraduationSettings = {
    isVisible: boolean;
    height: number,
    color?: string,
    width: number,
    opacity: number,
    font?: FontSettings
}

export type IndentedClockSettings = {
    indentationLeft: string,
}

export type ClockFaceProps = {
    font?: Partial<FontSettings>,
    divider?: Partial<ClockDivider>,
}

export type BaseClockFaceProps = {
    font: FontSettings,
    divider: ClockDivider,
}

export interface ClockProps {
    time: Time;
}

export type ClockDivider = {
    width: string | number;
    borderRadius: Token<CSS.Property.BorderRadius | number, "radii">;
    borderWidth: Token<CSS.Property.BorderWidth | number, "borderWidths">;
    color: Token<CSS.Property.BackgroundColor, "colors">;
    opacity: number;
    marginBottom: Token<CSS.Property.Margin | number, "space">;
}

export type Time = { hour: number, minute: number, second: number };

