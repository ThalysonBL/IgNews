import styles from './styles.module.scss'
import { SignInButton } from './../SignInButton/index';

/* eslint-disable @next/next/no-img-element */
export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="IG.News" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>

        </nav>

        <SignInButton/>
      </div>
    </header>
  )
}