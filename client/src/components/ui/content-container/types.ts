export interface ContentContainerProps {
    children?: JSX.Element | JSX.Element[] | any;
    className?: string;
    wrapContentToRight?: boolean;
    wrapContentToLeft?: boolean;
    width?: string;
    height?: string;
    alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
}