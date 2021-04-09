import loadable from '~/src/utils/loadable';

export const WelcomePage: (props: any) => JSX.Element = loadable(() => import('./welcome-page/WelcomePage'));