import * as React from 'react'
import styles from './Header.module.scss'
import logo from './logo.png'

const Header = () => 
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <img src={logo} alt={'logo'} className={styles.logo}/>
        </div>
    </header>

export default Header