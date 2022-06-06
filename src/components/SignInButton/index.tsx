import {FiX} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

import styles from './style.module.scss'

export function SignInButton(){
  const isUserLoggedIn = true

  return isUserLoggedIn ?(
    <button 
    className={styles.signInButton}
    type="button">
      <FaGithub  color="#04b361"/>
      Thalyson Brito
      <FiX color="#737388" classname={styles.closeIcon}/>
    </button>
    
  ) : (
    <button 
    className={styles.signInButton}
    type="button">
      <FaGithub  color="#eba417"/>
      Sign in with Github
    </button>
  )
}