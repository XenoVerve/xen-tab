import React, {FC} from "react";
import {Heading} from "@chakra-ui/react";
import {ClockProps} from "../types/clock.type";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface DigitalClockProps extends ClockProps {
    useTextShadow?: boolean;
}

const DigitalClock: FC<DigitalClockProps> = ({ time, useTextShadow }) => {

    const baseSettings = useSelector((state: RootState) => state.clock.clockProperty.base);

    const render = () => {
        return (
            <Heading
                fontSize={baseSettings.font.size}
                color={baseSettings.font.color}
                textShadow={ useTextShadow ? '0 0 20px rgba(0, 0, 0, 0.3)' : undefined}
            >
                { time.hour.toString().padStart(2, '0') }
                :
                { time.minute.toString().padStart(2, '0') }
                </Heading>
        )
    }

    return render();
}

export default DigitalClock;
