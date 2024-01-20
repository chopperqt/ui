import React from "react";
import cx from 'classnames'

import { LoaderWrapper } from "./partials/loader-wrapper";

import styles from './Button.module.scss'

export interface ButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  label,
  isDisabled = false,
  isLoading = false,
  onClick = () => { },
}: ButtonProps) => (
  <button
    className={cx(styles.button, {
      [styles.buttonLoading]: isLoading,
      [styles.buttonDisabled]: isLoading,
    })}
    onClick={onClick}
    disabled={isDisabled}
  >
    {isLoading && (
      <LoaderWrapper />
    )}
    {label}
  </button>
)

export default Button;
