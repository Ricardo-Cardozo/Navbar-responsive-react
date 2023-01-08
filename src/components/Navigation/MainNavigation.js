import styles from './MainNavigation.module.css'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import { useState } from 'react'
import Backdrop from '../UIElements/Backdrop'

const MainNavigation = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {open && <Backdrop onClick={handleClose}/>}
      <SideDrawer show={open} onClick={handleClose}>
        <nav className={styles.nav_side}>
          <NavLinks/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className={styles.nav_toggle} onClick={handleOpen}>
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles.nav_title}>
          <Link to='/'>
            System<strong>Log</strong>
          </Link>
        </h1>
        <nav className={styles.nav_header}>
          <NavLinks/>
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation