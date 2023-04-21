import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { MusicTrack } from "./types/music.type";

interface MusicTrackInfoProps {
    artist: MusicTrack['artist'];
    title: MusicTrack['title'];
    length: MusicTrack['length'];
    currentTime: MusicTrack['currentTime'];
    isHover?: boolean
}

const baseProps = {
    transform: 'auto',
    transition: 'transform 0.6s cubic-bezier(.71,-0.08,.25,1)'
}

const MusicTrackInfo: FC<MusicTrackInfoProps> = ({ artist, title, length, currentTime, isHover }) => {


    const render = () => {
        const translateX = isHover ? '0%' : '-115%';
        return (
            <Box
                color='white'
                cursor='default'
                pl={4}
                overflow='hidden'
            >
                <Heading
                    {...baseProps}
                    fontSize='1.5rem'
                    translateX={translateX}
                    color='purple.300'
                >
                    { artist }
                </Heading>
                <Heading 
                    {...baseProps}
                    fontSize='1rem'
                    lineHeight='1.4'
                    opacity={0.8}
                    translateX={translateX}
                    transitionDelay='0.3s'
                >
                    { title }
                </Heading>
                <Heading
                    {...baseProps}
                    fontSize='0.8rem'
                    opacity={0.8}
                    color='purple.500'
                    translateX={translateX}
                    transitionDelay='0.5s'
                >
                    { currentTime } - { length }
                </Heading>
            </Box>
        )
    }

    return render();
}

export default MusicTrackInfo;