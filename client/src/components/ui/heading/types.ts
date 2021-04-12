export interface HeadingProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    className?: string;
    children: JSX.Element | JSX.Element[] | string;
}