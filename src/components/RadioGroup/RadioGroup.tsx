import React from 'react'
import cx from 'classnames'

import Radio from '../Radio'

import styles from './RadioGroup.module.scss'

export interface OptionProps {
  className?: string;
  isDisabled?: boolean;
  label?: string;
  value?: string | number;
}

export interface RadioGroupProps {
  label?: string
  value?: string | number
  isInline?: boolean
  className?: string
  isDisabled?: boolean
  name?: string
  options?: OptionProps[]
  onChange?: (value: string | number) => void
}

/**
 * NOTE: Если не будет имени, нужно будет сгенерировать его самостоятельно.
 */
const RadioGroup = ({
  label = '',
  className = '',
  name = '',
  isDisabled = false,
  isInline = false,
  options,
}: RadioGroupProps) => (
  <div className={cx(styles.layout, className)}>
    <label className={styles.label}>{label}</label>
    {!!options?.length && options.map(({ label, className }) => (
      <Radio className={cx(styles.item, className)} label={label} />
    ))}
  </div>
)

export default RadioGroup
