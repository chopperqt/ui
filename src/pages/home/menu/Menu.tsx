import { NavLink } from 'react-router-dom'

import { Menu as MenuItems } from 'helpers/constants'

import styles from './Menu.module.scss'

const Menu = () => (
  <ul className={styles.menu}>
    {MenuItems.map(({
      status,
      title,
      path,
    }) => (
      <div className={styles.item}>
        <NavLink to={path}>
          {title}
        </NavLink>
        <div>
          {status}
        </div>
      </div>
    ))}
  </ul>
)

export default Menu
