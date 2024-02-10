import React from 'react'
import cx from 'classnames'

import style from './Radio.module.scss'

export interface RadioProps {
  label?: string
  isChecked?: boolean
  isDisabled?: boolean
  name?: string
  value?: string | number
  className?: string
  onClick?: () => void
}

const Radio = ({
  label = '',
  name = '',
  value = '',
  className = '',
  isChecked = false,
  isDisabled = false,
}: RadioProps) => (
  <label
    htmlFor={name}
    className={cx(style.layout, {
      [style.disabled]: isDisabled,
    }, className)}
  >{label}
    <input
      type="radio"
      checked={isChecked}
      name={name}
      value={value}
      disabled={isDisabled}
    />
    <span
      className={cx(style.checkmark, {
        [style.checkmarkDisabled]: isDisabled,
      })}
    />
  </label>
)

export default Radio 
