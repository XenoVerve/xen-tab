import React, {FC} from "react";
import {Center, Text} from "@chakra-ui/react";

interface QuoteAuthorProps {
    author: string;
    isHover?: boolean;
}

const QuoteAuthor: FC<QuoteAuthorProps> = ({ author, isHover }) => {

    const render = () => {
        return (
            <Center>
                <Text
                    position='absolute'
                    top={isHover ? '10px' : '0'}
                    opacity={isHover ? 0.7 : 0}
                    _hover={{
                        opacity: 1
                    }}
                    transition='all 0.2s ease-in-out'
                >{ author }</Text>
            </Center>
        )
    }

    return render();
}

export default QuoteAuthor;
