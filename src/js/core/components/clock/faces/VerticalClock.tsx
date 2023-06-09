import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getFontStyle } from "../../../helpers/fonts.helper";
import clockReducer from "../../../store/features/clock.reducer";
import { RootState } from "../../../store/store";
import { ClockProps, IndentedClockSettings } from "../types/clock.type";

export interface VerticalClockProps extends ClockProps {
    indentationSettings?: IndentedClockSettings
}

/**
 * VerticalClock - A vertical clock face
 */
const VerticalClock: FC<VerticalClockProps> = ({ time, indentationSettings }) => {
    const baseSettings = useSelector((state: RootState) => state.clock.clockProperty.base);
    const settings = useSelector((state: RootState) => state.clock.clockProperty.vertical);

    const hourFontStyle = getFontStyle(settings.hourFont, baseSettings.font);
    const minuteFontStyle = getFontStyle(settings.minuteFont, baseSettings.font);
    const dividerStyle = {
        w: settings.divider?.width ?? baseSettings.divider.width,
        ml: '50%',
        transform: 'translateX(-50%)',
        borderRadius: settings.divider?.borderRadius ?? baseSettings.divider.borderRadius,
        borderWidth: settings.divider?.borderWidth ?? baseSettings.divider.borderWidth,
        bgColor: settings.divider?.color ?? baseSettings.divider.color,
        opacity: settings.divider?.opacity ?? baseSettings.divider.opacity,
        mb: settings.divider?.marginBottom ?? baseSettings.divider.marginBottom
    };

    return (
        <Center>
            <Box>
                <Text
                    {...hourFontStyle}
                    lineHeight={0.8}
                    letterSpacing={settings.letterSpacing}
                >
                    { time.hour.toString().padStart(2, '0') }
                </Text>
                <Text
                    {...minuteFontStyle}
                    position="relative"
                    lineHeight={0.8}
                    mt={settings.timeSpacing}
                    mb={settings.marginBottom}
                    letterSpacing={settings.letterSpacing}
                    left={indentationSettings?.indentationLeft}
                >
                    { time.minute.toString().padStart(2, '0') }
                </Text>
                <Divider {...dividerStyle} />
            </Box>
        </Center>
    )
};

export default VerticalClock;