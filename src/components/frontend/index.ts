import loadable from '../../../utils/loadable';

export const Header: (props: any) => JSX.Element = loadable(() => import('./header'));
