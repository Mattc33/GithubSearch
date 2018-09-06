import styles from './Header.module.scss'
import logo from '../../Assets/logo.png'
import * as React from 'react'

const Header = () => 
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <img src={logo} alt={'logo'} className={styles.logo}/>
        </div>
    </header>

export default Header