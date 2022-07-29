import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

type ButtonSizes = 'small' | 'large'
type ButtonChildren = JSX.Element | JSX.Element[] | string

interface IButton extends React.ComponentProps<'button'> {
	sizing?: ButtonSizes
	children?: ButtonChildren
	fullWidth?: boolean
	isLoading?: boolean
	isCircle?: boolean
}

const Button = ({
	sizing,
	fullWidth = false,
	isLoading = false,
	children,
	isCircle,
	...props
}: IButton) => {
	const isLarge = sizing === 'large'
	const isSmall = sizing === 'small'

	return (
		<button
			className={cx(styles.button, {
				[styles.small]: isSmall,
				[styles.large]: isLarge,
				[styles.fullWidth]: fullWidth,
				[styles.disabled]: props.disabled || isLoading,
				[styles.circle]: isCircle,
			}, props.className)}
			disabled={props.disabled || isLoading}
			{...props}
		>
			{!isLoading && children}
			{isLoading && (
				<div className={styles.loading} />
			)}
		</button>
	)
}

export default Button