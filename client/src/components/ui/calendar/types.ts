import { Dispatch, SetStateAction } from "react";

export interface CalendarProps {
    generateHighlhtDates?: (value: Date) => void;
    highlightDates?: Date[];
    generateDailyEvents?: any;
    inline?: boolean;
    setCurrentMonth?: Dispatch<SetStateAction<Date>>;
}
