export interface ButtonProps {
    type?: "submit" | "reset" | "button";
    value?: string;
    name?: string;
    children?: JSX.Element | JSX.Element[] | string;
    onClick?: () => {};
    className?: string;
}

