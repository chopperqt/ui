import React from "react";
import cx from 'classnames'

import Button from "../Button";
import { ButtonType } from "../Button/Button";
import { IconNames } from "../Icon/icons";
import Icon from "../Icon";

import s from "./Tag.module.scss";

export interface TagProps {
  icon?: IconNames
  text?: string;
  isInteractive?: boolean
  onRemove?: () => void
  onClick?: () => void
}
const Tag = ({
  icon,
  text = '',
  isInteractive = false,
  onRemove,
  onClick = () => { },
}: TagProps) => {

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();

    onRemove()
  }

  return (
    <div
      className={cx(s.layout, {
        [s.layoutInteracitve]: isInteractive,
      })}
      onClick={onClick}
    >
      {icon && (
        <Icon icon={icon} />
      )}
      <span className={s.layoutText}>{text}</span>

      {onRemove && (
        <Button
          onClick={handleRemove}
          className={s.button}
          type={ButtonType.TEXT}
          icon="Close"
        />
      )}
    </div>
  );
};

export default Tag;
