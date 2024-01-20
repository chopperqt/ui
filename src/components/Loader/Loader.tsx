import React from 'react'

import Icon from '../Icon'

import './Loader.scss'

const DEFAULT_SIZE = 15

export interface LoaderProps {
  isLoading?: boolean
  size?: number
}

const Loader = ({
  isLoading = false,
  size = DEFAULT_SIZE,
}: LoaderProps) => {
  if (!isLoading) {
    return null
  }

  return (
    <span className="layout">
      <Icon
        icon='Loading'
        className="loader"
      />
    </span>
  )

}
export default Loader 
