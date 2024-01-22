import React from "react";

import styles from "./Input.module.scss";

export interface InputProps {
  placeholder?: string;
  isDisabled?: boolean;
  value?: string
  defaultValue?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  name,
  value,
  defaultValue,
  placeholder,
  isDisabled = false,
  onChange = () => { },
}: InputProps) => (
  <input
    value={value}
    name={name}
    defaultValue={defaultValue}
    disabled={isDisabled}
    placeholder={placeholder}
    className={styles.input}
    onChange={onChange}
  />
);

export default Input;
