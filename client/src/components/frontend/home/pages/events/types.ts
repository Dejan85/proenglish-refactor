export interface UiRenderTypes {
    eventsData?: { date: string; }[] | undefined;
    filterEventsHandler?: (date: object) => { payload: Record<string, any>; type: string; };
}

export interface UiRenderProps {
    generateHighlhtDates: (value?: Date) => void;
    filteredActiveEventsDates: { highlightDates: Date[]; filteredEvents: object[]; };
}

export interface EventTypes {
    created: string;
    date: string;
    description: string;
    time: string;
    title: string;
}

