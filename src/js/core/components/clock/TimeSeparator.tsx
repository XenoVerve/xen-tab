import { Center, keyframes, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TimeSeparatorProps {
    symbol?: string;
    isFlashing?: boolean,
    flashSpeed?: number,
}

const animation = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

/**
 * Time Separator Component - Used to separate each part of the time
 * 
 */
const TimeSeparator: FC<TimeSeparatorProps> = ({ symbol = ':', isFlashing, flashSpeed = 1 }) => {
    
    const animationStr = `${animation} ${flashSpeed}s ease-in-out infinite alternate`

    return (
        <Center>
            <Text 
                position='relative'
                transform='translateY(-5%)'
                animation={isFlashing ? animationStr : undefined}
            >
                { symbol }
            </Text>
        </Center>
    );
}

export default TimeSeparator;