export interface UiRenderTypes {
    eventsData?: { date: string; }[] | undefined;
    filterEventsHandler?: (date: object) => { payload: Record<string, any>; type: string; };
}


export interface CalendarOfEventsProps {
    generateHighlhtDates: () => (date: object) => { payload: Record<string, any>; type: string; };
    filteredActiveEventsDates: { highlightDates: Date[]; filteredEvents: object[]; };
}