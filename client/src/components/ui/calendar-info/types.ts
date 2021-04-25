export interface CalendarCardProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

export interface InfoProps {
    time: string;
    title: string;
}

export interface ContentProps {
    title: string;
    date: string;
    description: string;
    icon: string;
}