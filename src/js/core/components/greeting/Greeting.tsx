import React, {FC} from "react";
import {Heading} from "@chakra-ui/react";
import {GreetingText} from "./greeting.type";

const greetings: GreetingText = {
    default: {
        morning: { text: 'Good morning' },
        afternoon: { text: 'Good afternoon' },
        evening: { text: 'Good evening' },
        night: { text: 'Good night' },
        late_night: { text: 'Still awake', isQuestion: true }
    },
    kind: {
        morning: { text: 'A marvelous morning' },
        afternoon: { text: 'A splendid afternoon' },
        evening: { text: 'A wonderful evening' },
        night: { text: 'A fantastic night' },
        late_night: { text: 'Still awake', isQuestion: true }
    },
    funny: {
        morning: { text: 'Welcome to today' },
        afternoon: { text: 'Welcome to the afternoon' },
        evening: { text: 'Welcome to the evening' },
        night: { text: 'Welcome to the night' },
        late_night: { text: 'Still awake', isQuestion: true }
    }
}

interface GreetingProps {
    username?: string;
}

const Greeting: FC<GreetingProps> = ({ username= 'stranger' }) => {

    /**
     * Get the greeting based on the current time
     */
    const getGreeting = (name: string) => {
        const hour = new Date().getHours();
        let time_category: keyof typeof greetings.default = 'morning';

        if (hour < 3) time_category = 'late_night';
        else if (hour > 12 && hour < 18) time_category = 'afternoon';
        else if (hour < 22) time_category =  'evening';
        else if (hour < 24) time_category = 'night';

        const greeting = greetings.kind[time_category];
        return `${greeting.text}, ${name}${greeting?.isQuestion ? '?' : '!'}`;
    }

    const render = () => {
        return (
            <Heading size='lg' color='gray.200'>
                { getGreeting(username) }
            </Heading>
        )
    }

    return render();
}

export default Greeting;
