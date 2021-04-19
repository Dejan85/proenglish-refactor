import loadable from '~/src/utils/loadable';

export const WelcomePage: (props: any) => JSX.Element = loadable(() => import('./welcome-page'));
export const About: (props: any) => JSX.Element = loadable(() => import('./about'));
export const Course: (props: any) => JSX.Element = loadable(() => import('./course'));
export const Blog: (props: any) => JSX.Element = loadable(() => import('./blog'));
export const Newsletter: (props: any) => JSX.Element = loadable(() => import('./newsletter'));
export const Events: (props: any) => JSX.Element = loadable(() => import('./events'));
export const Experience: (props: any) => JSX.Element = loadable(() => import('./experience'));






