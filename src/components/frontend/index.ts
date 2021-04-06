import loadable from '../../../utils/loadable';

export const Navigation: (props: any) => JSX.Element = loadable(() => import('./navigation'));
export const Header: (props: any) => JSX.Element = loadable(() => import('./header'));
