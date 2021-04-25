export interface UiRenderTypes {
    eventsData?: { date: string; }[] | undefined;
    filterEventsHandler?: (date: object) => { payload: Record<string, any>; type: string; };
}

export interface UiRenderProps {
    generateHighlhtDates?: (value?: Date) => void;
    generateDailyEvents?: (value?: Date) => void;
    filteredDailyEventsData?: object[];
    highlightDates: Date[];
    inline?: boolean;
}

export interface EventsForTodayProps {
    filteredDailyEventsData: object[];
}

export interface EventTypes {
    created: string;
    date: string;
    description: string;
    time: string;
    title: string;
}

export interface RenderProps {
    filteredEvents: object[] | any;
}

