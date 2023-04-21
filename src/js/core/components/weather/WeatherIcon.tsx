import {FC} from "react";
import {WeatherCondition} from "./types/weather.type";
import {Icon, Image} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface WeatherIconProps {
}

const WeatherIcon: FC<WeatherIconProps> = ({ }) => {
    const condition = useSelector((state: RootState) => state.weather.condition);

    const render = () => {
        return (
            <Image 
                src='/icons/weather/fill/all/partly-cloudy-day.svg'
                alt='Weather Condition'
                h='70px'
                _hover={{
                    transform: 'scale(1.1)'
                }}
                transition='all 0.2s ease-in-out'
            />
        )
    }

    return render();
}

export default WeatherIcon;
