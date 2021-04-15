import React from "react";
import { WrapperType } from "~/src/global-types";
import { InputProps } from "./types";

const Wrapper: WrapperType = "input";
const className: string = "input";

const Input = (props: InputProps) => {
  const {
    className: costomClassName,
    placeholder,
    value,
    type,
    name,
    onChange,
  } = props;
  return (
    <Wrapper
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      className={
        costomClassName ? `${costomClassName} ${className}` : className
      }
    ></Wrapper>
  );
};

export default Input;
