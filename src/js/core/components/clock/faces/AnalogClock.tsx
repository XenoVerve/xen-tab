import { Box, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { timeLabels } from "../clock.vars";
import { TimeGraduation, TimeLabel, TimeLabelProps } from "../clockLabels";
import { ClockProps } from "../types/clock.type";

interface AnalogClockProps extends ClockProps {
}



/**
 * Analog Clock Face Component
 */
const AnalogClock: FC<AnalogClockProps> = ({ time }) => {

    const baseSettings = useSelector((state: RootState) => state.clock.clockProperty.base);
    const settings = useSelector((state: RootState) => state.clock.clockProperty.analog);

    // const dotColor = useSelector((state: RootState) => state.clock.clockProperty.analog.dotColor);
    // const borderColor = useSelector((state: RootState) => state.clock.clockProperty.analog.borderColor);

    // const hourHandSettings = useSelector((state: RootState) => state.clock.clockProperty.analog.hourHand);
    // const minuteHandSettings = useSelector((state: RootState) => state.clock.clockProperty.analog.minuteHand);
    // const secondHandSettings = useSelector((state: RootState) => state.clock.clockProperty.analog.secondHand);

    // const majorGraduationSettings = useSelector((state: RootState) => state.clock.clockProperty.analog.graduations.major);
    // const minorGraduationSettings = useSelector((state: RootState) => state.clock.clockProperty.analog.graduations.minor);

    // time.hour = 8;
    // time.minute = 20;
    return (
        <Box
            position='relative'
            display='inline-block'
            boxSize='270px'
            border='8px solid'
            borderRadius='full'
            borderColor={settings.borderColor}
            mb={5}
            color={settings.borderColor}
        >
            {
                <TimeLabel
                    labels={timeLabels}
                    font={settings.graduations.major.font ?? baseSettings.font}
                />
            }
            <Box
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
            >
                {
                    settings.graduations.major.isVisible && (
                        <TimeGraduation
                            appearance={{
                                height: settings.graduations.major.height + 'px',
                                width: '255px',
                                borderLeft: settings.graduations.major.width + 'px solid',
                                borderRight: settings.graduations.major.width + 'px solid',
                                borderColor: settings.graduations.major.color,
                                opacity: settings.graduations.major.opacity,
                            }}
                            density={4}
                        />
                    )
                }
                {
                    settings.graduations.minor.isVisible && (
                        <TimeGraduation
                            appearance={{
                                height: settings.graduations.minor.height + 'px',
                                width: '255px',
                                borderLeft: settings.graduations.minor.width + 'px solid',
                                borderRight: settings.graduations.minor.width + 'px solid',
                                borderColor: settings.graduations.minor.color,
                                opacity: settings.graduations.minor.opacity,
                            }}
                            density={settings.graduations.minor.density}
                        />
                    )
                }
                <Box
                    zIndex={10}
                    position='absolute'
                    top='calc(50% - 10px)'
                    left='calc(50% - 10px)'
                    boxSize='20px'
                    borderRadius='full'
                    bg={settings.dotColor ?? settings.borderColor}
                />
                {
                    settings.secondHand.isVisible && (
                        <Box
                            position='absolute'
                            left='-2.5px'
                            transform={`rotate(${time.second * 6 - 180 }deg)`}
                            transformOrigin='top center'
                            width={settings.secondHand.thickness + 'px'}
                            height='100px'
                            borderRadius='full'
                            bg={settings.secondHand.color ?? settings.borderColor}
                            opacity={settings.secondHand.opacity}
                            //!Bug: Line suddenly rotates to wrong positions only at 0 seconds
                            transition={settings.secondHand.smoothTransition ? 'all 0.1s ease-in-out' : undefined }
                        />
                    )
                }
                {
                    settings.hourHand.isVisible && (
                        <Box
                            position='absolute'
                            left='-2.5px'
                            transform={`rotate(${(time.hour % 12 + time.minute / 60) * 30 - 180 }deg)`}
                            transformOrigin='top center'
                            width='5px'
                            height='50px'
                            borderRadius='full'
                            bg={settings.hourHand.color ?? settings.borderColor}
                            opacity={settings.hourHand.opacity}
                            transition={settings.hourHand.smoothTransition ? 'all 0.1s ease-in-out' : undefined }

                        />
                    )
                }
                {
                    settings.secondHand.isVisible && (
                        <Box
                            position='absolute'
                            left='-2.5px'
                            transform={`rotate(${time.minute * 6 - 180 }deg)`}
                            transformOrigin='top center'
                            width='5px'
                            height='80px'
                            borderRadius='full'
                            bg={settings.secondHand.color ?? settings.borderColor}
                            opacity={settings.secondHand.opacity}
                            transition={settings.secondHand.smoothTransition ? 'all 0.1s ease-in-out' : undefined }
                        />
                    )
                }
            </Box>
        </Box>
    )
}

export default AnalogClock;