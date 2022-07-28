import React from 'react'
import cx from 'classnames'

import styles from './Spin.module.scss';

type TSize = 'small' | 'middle' | 'large' | 'custom'
type TType = 'primary' | 'secondary' | 'warning' | 'error' | 'custom'

interface ISpin {
	className?: string
	size?: TSize
	type?: TType
	children?: JSX.Element
	isLoading: boolean
}

const Spin = ({
	className,
	size = 'middle',
	type = 'primary',
	children,
	isLoading,
}: ISpin) => (
	<div
		data-testid="spin-wrapper"
		className={styles.spinWrapper}
	>
		{isLoading && (
			<div
				data-testid="spin-layout"
				className={styles.spinLayout}>
				<div
					data-testid="spin"
					className={cx(
						styles.spin,
						className,
						`spin-type--${type} spin-size--${size}`
					)}>
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		)}

		{children}
	</div>
)

export default Spin