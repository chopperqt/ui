import {
  LOADING_TEXT,
  LOADING_TITLE,
} from '../constants'

import styles from '../ButtonPage.module.scss'
import { Button } from 'components'

const Loading = () => (
  <div>
    <div className='heading--lg text--bold'>
      {LOADING_TITLE}
    </div>
    <div className='heading--md'>
      {LOADING_TEXT}
    </div>
    <div className={styles.wrap}>
      <Button isLoading={true}>
        {LOADING_TITLE}
      </Button>
    </div>
  </div>
)

export default Loading