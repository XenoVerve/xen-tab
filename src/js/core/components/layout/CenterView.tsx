import {FC} from "react";
import {Box} from "@chakra-ui/react";
import Greeting from "../greeting/Greeting";
import Clock from "../clock/Clock";
import CenterDivider from "../misc/CenterDivider";


const CenterView: FC = () => {

    const render = () => {
        return (
            <Box
                position="fixed"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textShadow='0 0 20px rgba(0, 0, 0, 0.3)'
            >
                <Box textAlign='center'>
                    <Clock />
                    {/* <CenterDivider /> */}
                    <Greeting username='Emily' />
                </Box>
            </Box>
        )
    }

    return render();
}

export default CenterView;
