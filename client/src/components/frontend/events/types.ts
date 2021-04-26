export interface UiRenderProps {
    generateHighlhtDates?: (value?: Date) => void;
    filteredActiveEventsDates: { highlightDates: Date[]; filteredEvents: object[]; };
    generateDailyEvents?: (value?: Date) => void;
    filteredDailyEventsData?: object[];
    eventsData?: object[];
}

export interface DailyEventsProps {
    events?: object[];
}

export interface MonthlyEventsProps {
    filteredActiveEventsDates: { highlightDates: Date[]; filteredEvents: object[]; };
}