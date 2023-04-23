import { Center, CircularProgress, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getFontStyle } from "../../../helpers/fonts.helper";
import { RootState } from "../../../store/store";
import { FontSettings } from "../../../types/font.type";
import TimeSeparator from "../TimeSeparator";
import { ClockProps } from "../types/clock.type";

/**
 * Circle Clock Face Component
 */
const CircleClock: FC<ClockProps> = ({ time }) => {

    const settings = useSelector((state: RootState) => state.clock.clockProperty.circle);
    const fontSettings = useSelector((state: RootState) => state.clock.clockProperty.circle.font);

    const baseFontSize = settings.showSeconds ? fontSettings?.sizeWithSeconds ?? fontSettings?.size : fontSettings?.size;

    const hourFont = getFontStyle(settings.hourFont);
    const minuteFont = getFontStyle(settings.minuteFont);
    const secondsFont = getFontStyle(settings.secondsFont);

    return (
        <CircularProgress
            max={60}
            value={time.minute + (time.second / 60) / 60}
            size={settings.size + 'px'}
            thickness={settings.thickness + 'px'}
            color={settings.showProgress ? settings.progressColor : settings.trackColor}
            trackColor={settings.trackColor}
            capIsRound={settings.isCapRound}
        >
            <Flex
                position='absolute'
                top='50%'
                left='50%'
                fontSize={baseFontSize}
                fontWeight={fontSettings?.weight}
                color={fontSettings?.color ?? settings.trackColor}
                fontFamily={fontSettings?.family}
                opacity={fontSettings?.opacity}
                textShadow={fontSettings?.shadow}
                transform='translate(-50%, -50%)'
            >
                <Center>
                    <Text {...hourFont}>{ time.hour.toString().padStart(2, '0') }</Text>
                </Center>
                <TimeSeparator isFlashing={settings.flashingDots} />
                <Center>
                    <Text {...minuteFont}>{ time.minute.toString().padStart(2, '0') }</Text>
                </Center>
                {
                    settings.showSeconds && (
                        <>
                            <TimeSeparator isFlashing={settings.flashingDots} />
                            <Center {...secondsFont}> { time.second.toString().padStart(2, '0') }</Center>
                        </>
                    )
                }
            </Flex>
        </CircularProgress>
    )
}

export default CircleClock