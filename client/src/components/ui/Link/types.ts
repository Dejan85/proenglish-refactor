import { RouterLinkType } from '~/src/global-types';

export interface LinkPropsType {
    as: "a" | RouterLinkType;
    to?: string;
    href?: string;
    className?: string;
    children: JSX.Element | JSX.Element[] | string;
}