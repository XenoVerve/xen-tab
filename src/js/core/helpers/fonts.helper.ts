import { FontSettings } from "../types/font.type";

/**
 * Merges font settings with base font settings
 * @param font  Font settings
 * @param baseSettings  Base font settings
 * @returns  Merged font settings
 */
const getFontStyle = (customSettings: Partial<FontSettings>, baseSettings : FontSettings) => ({
    fontSize: customSettings?.size ?? baseSettings.size,
    fontFamily: customSettings?.family ?? baseSettings.family,
    fontWeight: customSettings?.weight ?? baseSettings.weight,
    textShadow: customSettings?.shadow ?? baseSettings.shadow,
    color: customSettings?.color ?? baseSettings.color,
});

export { getFontStyle };