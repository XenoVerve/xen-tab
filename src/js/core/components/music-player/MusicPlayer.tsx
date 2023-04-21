import { FC, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import MusicTrackInfo from "./MusicTrackInfo";
import { MusicTrack } from "./types/music.type";

interface MusicPlayerProps {
    
}

const MusicPlayer: FC<MusicPlayerProps> = ({}) => {
    const [isHover, setIsHover] = useState(false);

    const track: MusicTrack = {
        artist: 'Chloe Rose',
        title: 'Echoes of Youth',
        length: 2.78,
        currentTime: 1.63,
        status: 'playing',
        artwork: '/images/placeholder/album_cover.jpg',
        src: ''
    };

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);
    
    const render = () => {
        return (
            <Box
                display='flex'
                position='absolute'
                top='30px'
                left='30px'
                alignItems='center'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                _hover={{
                    transform: 'scale(1.05)'
                }}
                transition='transform 0.2s ease-in-out'
            >
                <Image
                    boxSize='100px'
                    src={track.artwork}
                    alt={`${track.artist} - ${track.title}`} 
                    borderRadius='xl'
                    // mr={4}
                    zIndex={1}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <MusicTrackInfo
                    artist={track.artist}
                    title={track.title}
                    length={track.length}
                    currentTime={track.currentTime}
                    isHover={isHover}
                />
                {/* Top Middle - Right Middle */}
                {/* <Box
                    position='absolute'
                    top='-2.5px'
                    left='-2.5px'
                    width='calc(100% + 5px)'
                    height='calc(100% + 5px)'
                    backgroundColor='primary.500'
                    borderRadius='0.9rem'
                    zIndex={-1}
                    //              T  R   B  L
                    // clipPath='inset(0% 50% 95% 50%)'
                    clipPath='inset(0% 6% 95% 50%)'
                /> */}
            </Box>
        )
    }

    return render();
}

export default MusicPlayer;