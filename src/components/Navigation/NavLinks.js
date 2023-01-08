import { NavLink } from 'react-router-dom'
import styles from './NavLinks.module.css'

const NavLinks = () => {
  return (
    <ul className={styles.nav_link}>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks