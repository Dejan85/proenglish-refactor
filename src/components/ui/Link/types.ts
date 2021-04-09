import { RouterLinkType } from '~/src/global-types';

export interface LinkPropsType {
    as: "a" | RouterLinkType;
    to?: string;
    href?: string;
    text?: string;
    className?: string;
}