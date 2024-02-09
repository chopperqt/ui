import React from "react";
import cx from 'classnames'

import Icon from "../Icon";
import { IconNames } from "../Icon/icons";
import { LoaderWrapper } from "./partials/loader-wrapper";

import styles from './Button.module.scss'

export enum ButtonType {
  TEXT = 'text',
  NONE = 'none',
}

export interface ButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label: string;
  icon?: IconNames
  isDisabled?: boolean;
  isLoading?: boolean;
  isDanger?: boolean
  type?: ButtonType
}

const Button = ({
  label,
  icon,
  type = ButtonType.NONE,
  isDisabled = false,
  isLoading = false,
  isDanger = false,
  onClick = () => { },
}: ButtonProps) => {
  const isText = type === 'text'

  return (
    <button
      className={cx(styles.button, {
        [styles.buttonLoading]: isLoading,
        [styles.buttonDisabled]: isLoading,
        [styles.buttonDanger]: isDanger,
        [styles.text]: isText,
        [styles.textDanger]: isText && isDanger,
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
}

export default Button;
