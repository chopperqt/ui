import React from "react";

import "./Button.css";

export interface ButtonProps {
  label: string;
  isDisabled?: boolean;
}

const Button = ({
  label,
  isDisabled = false,
}: ButtonProps) => (<button disabled={isDisabled}>{label}</button>)

export default Button;
