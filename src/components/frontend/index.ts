import loadable from '~/src/utils/loadable';

export const Header: (props: any) => JSX.Element = loadable(() => import('./header'));
