import React from "react";
import cx from 'classnames'

import Icon from "../Icon";

import s from './Checkbox.module.scss'

export interface CheckboxProps {
  name?: string
  label?: string
  isChecked?: boolean
  isDisabled?: boolean
  onChange?: (isChecked: boolean) => void
}

const Checkbox = ({
  name = '',
  label = '',
  isChecked = false,
  isDisabled = false,
  onChange = () => { },
}: CheckboxProps) => (
  <label
    className={cx(s.layout, {
      [s.layoutDisabled]: isDisabled,
    })}
    htmlFor={name}
  >
    {label}
    <input
      name={name}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      onChange={() => onChange(!isChecked)}
    />
    {isChecked && (
      <div className={s.layoutIconWrapper}>
        <Icon
          className={s.layoutIcon}
          icon="SmallTick"
        />
      </div>
    )}
    <span className={s.layoutCheckmark} />
  </label>
)

export default Checkbox;
