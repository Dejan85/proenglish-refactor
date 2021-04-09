import { JSXElementConstructor, ReactElement, RefAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

export interface ButtonProps {
    type?: string;
    value?: string;
    name?: string;
    as: "Link" | "button" | "span";
    to?: string;
}

