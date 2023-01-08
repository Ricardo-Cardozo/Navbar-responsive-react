import { createPortal } from 'react-dom'
import styles from '../UIElements/Backdrop.module.css'

const Backdrop = ({onClick}) => {
  const content = <div className={styles.backdrop} onClick={onClick}></div>
  
  return createPortal(content, document.getElementById('backdrop-hook'))
    
  
}

export default Backdrop