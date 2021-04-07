import { RefAttributes, ReactElement, JSXElementConstructor } from "react";
import { LinkProps } from "react-router-dom";

export interface NavigationProps {
    children?: JSX.Element | JSX.Element[];
    routerLink: <S = any>(props: LinkProps<S> & RefAttributes<HTMLAnchorElement>) => ReactElement<any, string | JSXElementConstructor<any>> | null;
    linksText: string[];
    linksPath: string[];
}

export interface ListProps {
    children?: JSX.Element | JSX.Element[];
}
