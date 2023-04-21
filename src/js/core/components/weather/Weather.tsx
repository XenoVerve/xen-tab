import {FC} from "react";
import {Box} from "@chakra-ui/react";
import WeatherIcon from "./WeatherIcon";
import {WeatherCondition} from "./types/weather.type";
import WeatherLocation from "./WeatherLocation";
import WeatherTemperature from "./WeatherTemperature";

interface WeatherProps {

}

const Weather: FC<WeatherProps> = ({}) => {

    const render = () => {
        return (
            <Box
                position='absolute'
                top='30px'
                right='30px'
                display='flex'
                alignItems='center'
                fontFamily='Inter'
                fontWeight='bold'
                color='white'
                cursor='pointer'
            >
                <WeatherIcon />
                <Box>
                    <WeatherLocation opacity={0.8}/>
                    <WeatherTemperature />
                </Box>
            </Box>
        )
    }

    return render();
}

export default Weather;
