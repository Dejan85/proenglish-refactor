export interface CalendarProps {
    filterEventsHandler?: (date: object) => { payload: Record<string, any>; type: string; };
}