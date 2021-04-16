export interface ContentContainerProps {
    children?: JSX.Element | JSX.Element[] | any;
    className?: string;
    maxWidth?: string;
    width?: string;
    maxHeight?: string;
    height?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    padding?: string;
    outline?: string;
    borderRadius?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
    alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";
    alignSelf?: "auto" | "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";
    position?: "relative" | "absolute" | "fixed" | "static" | "sticky";
}