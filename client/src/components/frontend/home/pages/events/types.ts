export interface UiRenderTypes {
    eventsData?: { date: string; }[] | undefined;
    filterEventsHandler?: (date: object) => { payload: Record<string, any>; type: string; };
}