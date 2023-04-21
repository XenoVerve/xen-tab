import { TimeLabelProps } from "./clockLabels";

export const timeLabels: TimeLabelProps[] = [
    {
        label: '12',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    {
        label: '3',
        top: '50%',
        right: '12px',
        transform: 'translateY(-50%)'
    },
    {
        label: '6',
        top: 'calc(100% - 2rem - 18px)',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    {
        label: '9',
        top: '50%',
        left: '12px',
        transform: 'translateY(-50%)'
    }
]