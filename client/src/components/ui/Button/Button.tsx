import React from "react";
import { ButtonProps } from "./types";
import { WrapperType } from "~/src/global-types";

const className: string = "button";
const Wrapper: WrapperType = "button";

const Button = (props: ButtonProps) => {
  const {
    children,
    type = "button",
    value,
    name,
    onClick,
    className: costomClassName,
  } = props;
  return (
    <Wrapper
      type={type}
      value={value}
      className={
        costomClassName ? `${costomClassName} ${className}` : className
      }
      name={name}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
