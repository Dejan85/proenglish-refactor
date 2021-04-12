import loadable from '~/src/utils/loadable';

export const Header: (props: any) => JSX.Element = loadable(() => import('./header/Header'));
export const Home: (props: any) => JSX.Element = loadable(() => import('./home/Home'));
