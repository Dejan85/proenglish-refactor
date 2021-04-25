export interface UiRenderProps {
    generateHighlhtDates?: (value?: Date) => void;
    generateDailyEvents?: (value?: Date) => void;
    filteredDailyEventsData?: object[];
    highlightDates: Date[];
    inline?: boolean;
}

