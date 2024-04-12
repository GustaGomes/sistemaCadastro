/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import { Input } from "./styles";

type InputComponentProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function InputComponent({
  type,
  placeholder,
  value,
  onChange,
}: InputComponentProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}
