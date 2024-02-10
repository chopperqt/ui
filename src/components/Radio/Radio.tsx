import React from 'react'
import cx from 'classnames'

import style from './Radio.module.scss'

export interface RadioProps {
  label?: string
  isChecked?: boolean
  isDisabled?: boolean
  name?: string
}

const Radio = ({
  label = '',
  name = '',
  isChecked = false,
  isDisabled = false,
}: RadioProps) => (
  <label
    htmlFor={name}
    className={cx(style.layout, {
      [style.disabled]: isDisabled,
    })}
  >{label}
    <input
      type="radio"
      checked={isChecked}
      name={name}
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
