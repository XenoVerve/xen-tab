import {FC} from "react";
import {Box} from "@chakra-ui/react";


const CenterDivider: FC = () => {
    return (
        <Box
            position='relative'
            left='50%'
            w='50%'
            h='5px'
            mt={2}
            mb={4}
            bgColor='gray.100'
            borderRadius='full'
            transform='translateX(-50%)'
        />
    )
}

export default CenterDivider;
