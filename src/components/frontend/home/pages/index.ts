import loadable from '~/src/utils/loadable';
// import loadableVisibility from "react-loadable-visibility/loadable-components";

export const WelcomePage: (props: any) => JSX.Element = loadable(() => import('./welcome-page/WelcomePage'));
export const About: (props: any) => JSX.Element = loadable(() => import('./about/About'));
export const Course: (props: any) => JSX.Element = loadable(() => import('./course/Course'));




// export const WelcomePage = loadableVisibility(() => import('./welcome-page/WelcomePage'));
// export const About = loadableVisibility(() => import('./about/About'));
// export const Course = loadableVisibility(() => import("./course/Course"));

