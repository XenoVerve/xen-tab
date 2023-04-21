import React, {FC} from "react";
import {Heading} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface WeatherLocationProps {
    opacity?: number;
}

const WeatherLocation: FC<WeatherLocationProps> = ({ opacity= 1 }) => {

    const location = useSelector((state: RootState) => state.weather.location);

    return (
        <Heading
            size='sm'
            opacity={opacity}
        >
            { location }
        </Heading>
    )
}

export default WeatherLocation;
