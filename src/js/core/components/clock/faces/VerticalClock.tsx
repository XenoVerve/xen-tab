import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import CenterView from "../../layout/CenterView";
import { ClockProps } from "../types/clock.type";

/**
 * VerticalClock - A vertical clock face
 */
const VerticalClock: FC<ClockProps> = ({ time }) => {

    const baseSettings = useSelector((state: RootState) => state.clock.clockProperty.base);
    const settings = useSelector((state: RootState) => state.clock.clockProperty.vertical);

    return (
        <Center>
            <Box>
                <Text
                    fontSize={settings.hourFont?.size ?? baseSettings.font.size}
                    color={settings.hourFont?.color ??baseSettings.font.color}
                    fontFamily={settings.hourFont?.family ??baseSettings.font.family}
                    fontWeight={settings.hourFont?.weight ??baseSettings.font.weight}
                    textShadow={settings.hourFont?.shadow ?? baseSettings.font.shadow}   
                    lineHeight={0.8}
                    letterSpacing={settings.letterSpacing}
                >
                    { time.hour.toString().padStart(2, '0') }
                </Text>
                <Text
                    fontSize={settings.minuteFont?.size ?? baseSettings.font.size}
                    color={settings.minuteFont?.color ?? baseSettings.font.color}
                    fontFamily={settings.minuteFont?.family ?? baseSettings.font.family}
                    fontWeight={settings.minuteFont?.weight ?? baseSettings.font.weight}
                    textShadow={settings.minuteFont?.shadow ?? baseSettings.font.shadow}   
                    lineHeight={0.8}
                    mt={settings.timeSpacing}
                    mb={settings.marginBottom}
                    letterSpacing={settings.letterSpacing}
                >
                    { time.minute.toString().padStart(2, '0') }
                </Text>
                <Divider
                    w={settings.divider?.width ?? baseSettings.divider.width}
                    ml='50%'
                    transform='translateX(-50%)'
                    borderRadius={settings.divider?.borderRadius ?? baseSettings.divider.borderRadius}
                    borderWidth={settings.divider?.borderWidth ?? baseSettings.divider.borderWidth}
                    bgColor={settings.divider?.color ?? baseSettings.divider.color}
                    opacity={settings.divider?.opacity ?? baseSettings.divider.opacity}
                    mb={settings.divider?.marginBottom ?? baseSettings.divider.marginBottom}
                />
            </Box>
        </Center>
    )
};

export default VerticalClock;