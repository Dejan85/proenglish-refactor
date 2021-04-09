import { RefAttributes, ReactElement, JSXElementConstructor } from "react";
import { LinkProps } from "react-router-dom";

export type WrapperType = keyof JSX.IntrinsicElements;
export type RouterLinkType = <S = any>(props: LinkProps<S> & RefAttributes<HTMLAnchorElement>) => ReactElement<any, string | JSXElementConstructor<any>> | null;