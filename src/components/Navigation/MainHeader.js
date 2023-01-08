import React from 'react'
import styles from './MainHeader.module.css'

const MainHeader = ({children}) => {
  return (
    <header className={styles.main_header}>
      {children}
    </header>
  )
}

export default MainHeader