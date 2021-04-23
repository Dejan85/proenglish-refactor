import loadable from '~/src/utils/loadable';


export const Header: (props: any) => JSX.Element = loadable(() => import('./header/Header'));
export const Home: (props: any) => JSX.Element = loadable(() => import('./home/Home'));
export const About: (props: any) => JSX.Element = loadable(() => import('./about'));
export const Course: (props: any) => JSX.Element = loadable(() => import('./course'));
export const Exams: (props: any) => JSX.Element = loadable(() => import('./exams'));
export const Pricelist: (props: any) => JSX.Element = loadable(() => import('./pricelist'));
export const Blog: (props: any) => JSX.Element = loadable(() => import('./blog/Blog'));
export const BlogPage: (props: any) => JSX.Element = loadable(() => import('./blog/BlogPage'));
export const Contact: (props: any) => JSX.Element = loadable(() => import('./contact'));
export const Footer: (props: any) => JSX.Element = loadable(() => import('./footer/Footer'));
