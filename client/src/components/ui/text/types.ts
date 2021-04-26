import { WrapperType } from "~/src/global-types";


export interface TextProps {
    as: WrapperType,
    className?: string;
    children?: JSX.Element | JSX.Element[] | string | Element;
}