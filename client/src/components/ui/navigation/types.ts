import { RouterLinkType } from '~/src/global-types';

export interface NavigationProps {
    children?: JSX.Element | JSX.Element[];
    routerLink: RouterLinkType;
    linksText: string[];
    linksPath: string[];
}

export interface ListProps {
    children?: JSX.Element | JSX.Element[];
    onClick?: any;
}
