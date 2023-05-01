import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ClockProps } from "../types/clock.type";
import VerticalClock from "./VerticalClock";

export interface IndentedClockProps extends ClockProps {

}

/**
 * IndentedClock - A vertical clock face with indented time
 */
const IndentedClock: FC<IndentedClockProps> = ({ time }) => {
    const settings = useSelector((state: RootState) => state.clock.clockProperty.indented);

    return (
        <VerticalClock time={time} indentationSettings={settings} />
    )
};

export default IndentedClock;