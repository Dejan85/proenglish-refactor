export interface SchedulerProps {
    events?: object[];
    currentMonth?: Date;
}

export interface DaySquareProps {
    day?: string;
    sortedEvents?: object[];
    className?: string;
}