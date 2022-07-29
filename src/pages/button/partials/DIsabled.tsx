import {
  DISABLED_TEXT,
  DISABLED_TITLE,
} from '../constants'

import styles from '../ButtonPage.module.scss'
import { Button } from 'components'

const Disabled = () => (
  <div>
    <div className='heading--lg text--bold'>
      {DISABLED_TITLE}
    </div>
    <div className='heading--md'>
      {DISABLED_TEXT}
    </div>
    <div className={styles.wrap}>
      <Button disabled={true}>
        {DISABLED_TITLE}
      </Button>
    </div>
  </div>
)

export default Disabled