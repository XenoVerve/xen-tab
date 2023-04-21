import {FC} from "react";
import {Text} from "@chakra-ui/react";

interface QuoteTextProps {
    text: string;
    useQuotes?: boolean;
    isHover?: boolean;
}

const QuoteText: FC<QuoteTextProps> = ({ text, useQuotes, isHover }) => {

    const render = () => {
        return (
            <Text
                position='relative'
                top={isHover ? '-10px' : '0'}
                transition='all 0.2s ease-in-out'
            >{ useQuotes && '"'}{ text }{ useQuotes && '"'}</Text>
        )
    }

    return render();
}

export default QuoteText;
