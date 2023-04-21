import {FC} from "react";
import {Heading} from "@chakra-ui/react";
import {TemperatureUnit} from "./types/weather.type";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface WeatherTemperatureProps {
    unit?: TemperatureUnit;
}

const WeatherTemperature: FC<WeatherTemperatureProps> = ({unit }) => {

    const temperature = useSelector((state: RootState) => state.weather.temperature);

    const render = () => {
        let unitText: string | undefined;
        if (unit) unitText = unit === 'metric' ? 'C' : 'F';
        return (
            <Heading
                size='lg'
            >
                {temperature}°{unitText}
            </Heading>
        )
    }

    return render();

}

export default WeatherTemperature;
