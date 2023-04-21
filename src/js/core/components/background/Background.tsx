import {FC} from "react";
import {Box} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface BackgroundProps {

}

const Background: FC<BackgroundProps> = ({  }) => {

    const image = useSelector((state: RootState) => state.background.image);
    const blur = useSelector((state: RootState) => state.background.blur);
    const opacity = useSelector((state: RootState) => state.background.opacity);
    
    const render = () => {
        const validOpacity = Math.min(Math.max(opacity, 0), 1);
        return (
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex="-1"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundImage={image}
                filter={blur ? `blur(${blur}px)` : undefined}
                transform={blur ? `scale(1.1)` : undefined}
                opacity={validOpacity}
            />
        );
    }

    return render();
}

export default Background;
