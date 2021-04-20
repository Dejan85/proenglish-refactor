import loadable from '~/src/utils/loadable';

export const Header: (props: any) => JSX.Element = loadable(() => import('./header/Header'));
export const Home: (props: any) => JSX.Element = loadable(() => import('./home/Home'));
export const About: (props: any) => JSX.Element = loadable(() => import('./about'));
export const Footer: (props: any) => JSX.Element = loadable(() => import('./footer/Footer'));
