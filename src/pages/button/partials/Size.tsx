import { Button } from 'components'
import {
  SIZE_TEXT,
  SIZE_TITLE,
  SIZE_LARGE_TEXT,
  SIZE_MEDIUM_TEXT,
  SIZE_SMALL_TEXT,
} from '../constants'

import styles from '../ButtonPage.module.scss'

const Size = () => (
  <div>
    <div className="heading--lg text--bold">
      {SIZE_TITLE}
    </div>
    <div className='heading--md'>
      {SIZE_TEXT}
    </div>
    <div className={styles.wrap}>
      <Button sizing='small'>
        {SIZE_SMALL_TEXT}
      </Button>
      <Button>
        {SIZE_MEDIUM_TEXT}
      </Button>
      <Button sizing='large'>
        {SIZE_LARGE_TEXT}
      </Button>
    </div>
  </div>
)

export default Size