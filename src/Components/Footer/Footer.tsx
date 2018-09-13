import * as React from 'react'
import styles from './Footer.module.scss'

const Footer = () => 
    <footer className={styles.footer}>
        <div className={styles.footerText}>
            © Matthew Chan - <a target="_blank" href="https://github.com/Mattc33/GithubSearch">Github Search Mini Project Repo</a>
        </div>
    </footer>

export default Footer