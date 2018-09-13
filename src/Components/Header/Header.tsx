import styles from './Header.module.scss'
import * as React from 'react'

const Header = () => 
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <h2>Github Repo Search</h2>
        </div>
    </header>

export default Header