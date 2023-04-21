import {FC, useState} from "react";
import {Box} from "@chakra-ui/react";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";

interface QuoteProps {

}

const Quote: FC<QuoteProps> = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    const render = () => {
        return (
            <Box
                position='absolute'
                bottom='20px'
                left='50%'
                transform='translateX(-50%)'
                color='white'
                fontWeight='bold'
                fontFamily='GolosText'
                fontSize='1.025rem'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                cursor='default'
            >
                <QuoteText
                    text="Challenges are what make life interesting and overcoming them is what makes life meaningful"
                    isHover={isHover}
                />
                <QuoteAuthor
                    author="Joshua J. Marine"
                    isHover={isHover}
                />
            </Box>
        )
    }

    return render();
}

export default Quote;
