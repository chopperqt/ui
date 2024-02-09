import React from "react";
import cx from 'classnames'

import Icon from "../Icon";
import { IconNames } from "../Icon/icons";
import { LoaderWrapper } from "./partials/loader-wrapper";

import styles from './Button.module.scss'

export interface ButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label?: string;
  icon?: IconNames
  isDisabled?: boolean;
  isLoading?: boolean;
  isDanger?: boolean
}

const Button = ({
  icon,
  label = '',
  isDisabled = false,
  isLoading = false,
  isDanger = false,
  onClick = () => { },
}: ButtonProps) => (
  <button
    className={cx(styles.button, {
      [styles.buttonLoading]: isLoading,
      [styles.buttonDisabled]: isLoading,
      [styles.buttonDanger]: isDanger,
    })}
    onClick={onClick}
    disabled={isDisabled}
  >
    {isLoading && (
      <LoaderWrapper />
    )}
    {icon && (
      <Icon icon={icon} />
    )}
    {label}
  </button>
)

export default Button;
