import {ComponentType, FC, useState} from "react";
import DigitalClock, { DigitalClockProps } from "./faces/DigitalClock";
import { ClockType, Time} from "./types/clock.type";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import AnalogClock, { AnalogClockProps } from "./faces/AnalogClock";
import { useInterval } from "@chakra-ui/react";
import CircleClock, { CircleClockProps } from "./faces/CircleClock";
import VerticalClock, { VerticalClockProps } from "./faces/VerticalClock";
import IndentedClock from "./faces/IndentedClock";

/**
 * ClockTypeMap - A map of clock types to their respective components
 */
type ClockTypeMap = {
    [ClockType.Analog]: {
        comp: ComponentType<AnalogClockProps>,
        props?: Partial<AnalogClockProps>
    },
    [ClockType.Digital]: {
        comp: ComponentType<DigitalClockProps>,
        props?: Partial<AnalogClockProps>
    },
    [ClockType.Circle]: {
        comp: ComponentType<CircleClockProps>,
        props?: Partial<AnalogClockProps>
    },
    [ClockType.Vertical]: {
        comp: ComponentType<VerticalClockProps>,
        props?: Partial<AnalogClockProps>
    },
    [ClockType.Indented]: {
        comp: ComponentType<VerticalClockProps>,
        props?: Partial<VerticalClockProps>
    },
};

const clockTypeMap: ClockTypeMap = {
    [ClockType.Analog]: {
        comp: AnalogClock,
    },
    [ClockType.Digital]: {
        comp: DigitalClock,
    },
    [ClockType.Circle]: {
        comp: CircleClock,
    },
    [ClockType.Vertical]: {
        comp: VerticalClock,
    },
    [ClockType.Indented]: {
        comp: IndentedClock,
    },
};

const defaultTime = new Date();

/**
 * Clock - The clock component that renders the active clock face
 */
const Clock: FC = ({  }) => {
    const [time, setTime] = useState<Time>({ hour: defaultTime.getHours(), minute: defaultTime.getMinutes() , second: defaultTime.getSeconds() })

    const clockType = useSelector((state: RootState) => state.clock.clockType);
    const isAnalogClockSecondHandVisible = useSelector((state: RootState) => state.clock.clockProperty.analog.secondHand.isVisible);
    const isCircularClockSecondsVisible = useSelector((state: RootState) => state.clock.clockProperty.circle.showSeconds);

    useInterval(() => {
        const date = new Date();
        if (!isAnalogClockSecondHandVisible && !isCircularClockSecondsVisible &&
            (date.getHours() == time.hour || date.getMinutes() == time.minute)) return;
        setTime({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() })
    }, 1000);

    /**
     * Get the clock type
     * @param type The clock type
     */
    const getClockType = (type: ClockType) => {
        const ClockElement = clockTypeMap[type] ?? clockTypeMap[ClockType.Digital];
        const { comp: Component, props } = ClockElement;
        return <Component time={time} {...props} />;
    }

    return getClockType(clockType);
}

export default Clock;
