import React from "react";
import { WrapperType } from "~/src/global-types";
import { ButtonProps } from "./types";

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
    width,
    height,
    padding,
  } = props;

  const style = { width, height, padding };
  return (
    <Wrapper
      type={type}
      value={value}
      className={
        costomClassName ? `${costomClassName} ${className}` : className
      }
      name={name}
      onClick={onClick}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
