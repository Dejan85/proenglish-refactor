import loadable from '~/src/utils/loadable';

export const WelcomePage: (props: any) => JSX.Element = loadable(() => import('./welcome-page/WelcomePage'));
export const About: (props: any) => JSX.Element = loadable(() => import('./about/About'));
export const Course: (props: any) => JSX.Element = loadable(() => import('./course/Course'));
export const Blog: (props: any) => JSX.Element = loadable(() => import('./blog/Blog'));
export const Newsletter: (props: any) => JSX.Element = loadable(() => import('./newsletter/Newsletter'));
export const Events: (props: any) => JSX.Element = loadable(() => import('./events/Events'));






