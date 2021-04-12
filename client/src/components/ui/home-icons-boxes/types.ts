export type TagType = 'div';
export interface BoxProps {
    iconClassName: string,
    text: string;
    customClassName?: string;
}
export interface BoxContainer {
    children: JSX.Element | JSX.Element[];
}