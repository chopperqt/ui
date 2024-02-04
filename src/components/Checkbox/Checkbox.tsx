import React from "react";

import Icon from "../Icon";

import s from './Checkbox.module.scss'

export interface CheckboxProps {
  name?: string
  label?: string
  isChecked?: boolean
  onChange?: (isChecked: boolean) => void
}

const Checkbox = ({
  name = '',
  isChecked = false,
  label = '',
  onChange = () => { },
}: CheckboxProps) => (
  <label
    className={s.layout}
    htmlFor={name}
  >
    {label}
    <input
      name={name}
      type="checkbox"
      checked={isChecked}
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
    <span className={s.layoutCheckmark}></span>
  </label>
)

export default Checkbox;
