import React from 'react'

import Loader from "../../Loader";

import styles from '../Button.module.scss'

export const LoaderWrapper = () => (
  <div className={styles.loaderWrapper}>
    <Loader isLoading />
  </div>
)
