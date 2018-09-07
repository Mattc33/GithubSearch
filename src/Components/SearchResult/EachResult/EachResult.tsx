import * as React from 'react'
import styles from './EachResult.module.scss'

const EachResult = () => 
    <div className={styles.eachResultContainer}>
        <div className={styles.textSection}>
            <h4 className={styles.title}>1</h4>
            <p className={styles.description}>1</p>
            <div className={styles.isForked}>1</div>
        </div>
        <div className={styles.starsSection}>1</div>
        <div className={styles.licenseSection}>1</div>
    </div>

export default EachResult