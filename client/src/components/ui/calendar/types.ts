export interface CalendarProps {
    generateHighlhtDates?: () => void;
    highlightDates?: Date[];
    generateDailyEvents?: (value?: Date | undefined) => void | undefined;
}
