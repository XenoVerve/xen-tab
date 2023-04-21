import {FC, ReactElement, useState} from "react";
import DigitalClock from "./faces/DigitalClock";
import {ClockType, Time} from "./types/clock.type";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import AnalogClock from "./faces/AnalogClock";
import { useInterval } from "@chakra-ui/react";
import CircleClock from "./faces/CircleClock";
import VerticalClock from "./faces/VerticalClock";

const defaultTime = new Date();


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
    const getClockType = (type: ClockType): ReactElement => {
        switch (type) {
            case ClockType.Digital:
                return <DigitalClock time={time} />
            case ClockType.Analog:
                return <AnalogClock time={time} />
            case ClockType.Circle:
                return <CircleClock time={time} />
            case ClockType.Vertical:
                return <VerticalClock time={time} />
            default:
                return <DigitalClock time={time} />
        }
    }

    return getClockType(clockType);
}

export default Clock;
