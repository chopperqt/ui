import React from "react";
import cx from 'classnames'

import s from "./Tag.module.scss";

export interface TagProps {
  text?: string;
  isInteractive?: boolean
}
const Tag = ({
  text = '',
  isInteractive = false,
}: TagProps) => {
  return (
    <div
      className={cx(s.layout, {
        [s.layoutInteracitve]: isInteractive,
      })}
    >
      <span>{text}</span>
    </div>
  );
};

export default Tag;
