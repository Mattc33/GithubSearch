import * as React from 'react'
import styles from './EachResult.module.scss'

const EachResult = () => 
    <div className={styles.eachResultContainer}>
        <div className={styles.textSection}>
            <div className={styles.titleDescription}>
                <h4>toxicFork/react-three-renderer</h4>
                <p>Render into a three.js canvas using React.</p>
            </div>
            <div className={styles.isForked}><span>forked</span></div>
        </div>
        <div className={`${styles.starsSection} ${styles.infoBox}`}><div><span>Stars:</span><span>1000</span></div></div>
        <div className={`${styles.licenseSection} ${styles.infoBox}`}><div><span>License:</span><span>MIT License</span></div></div>
    </div>

export default EachResult