export interface SchedulerProps {
    events?: object[];
    currentMonth?: Date;
}

export interface DaySquareProps {
    day?: number;
    sortedEvents?: object[];
    className?: string;
}