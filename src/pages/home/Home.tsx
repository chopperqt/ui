import {
  Routes,
  Route,
} from 'react-router-dom'

import { Pages } from '../../helpers/constants'
import Menu from './menu/Menu'

import styles from './Home.module.scss'

const Home = () => (
  <div className={styles.layout}>
    <Menu />
    <div className="container">
      <Routes>
        {Pages.map(({
          page,
          path,
        }) => (
          <Route
            path={path}
            element={page}
          />
        ))}
      </Routes>
    </div>
  </div>
)

export default Home