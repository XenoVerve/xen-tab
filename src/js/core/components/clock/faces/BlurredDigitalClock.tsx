import { FC } from "react";
import { ClockProps } from "../types/clock.type";

export interface BlurredDigitalClockProps extends ClockProps {

}

/**
 * BlurredDigitClock - A blurred digital clock face
 */
const BlurredDigitClock: FC<BlurredDigitalClockProps> = ({ time }) => {

    return (
        <div>

        </div>
    )
};

export default BlurredDigitClock;