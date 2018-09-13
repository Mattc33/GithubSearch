import * as React from 'react'
import styles from './EachResult.module.css'

const EachResult = (props: any) => 
    <div className={styles.eachResultContainer}>
        <div className={styles.textSection}>
            <div className={styles.titleDescription}>
                <h4><a target="_blank" href={props.urlToRepo}>{props.repoName}</a></h4>
                <p>{props.description}</p>
            </div>
            {
                props.isForked ? <div className={styles.isForked}><span>forked</span></div> : null
            }
        </div>
        <div className={`${styles.starsSection} ${styles.infoBox}`}>
            <div>
                <span>Stars: </span>
                <span>{props.numberOfStars}</span>
            </div>
        </div>
        <div className={`${styles.licenseSection} ${styles.infoBox}`}>
            <div>
                <span>License: </span>
                <span>{props.license}</span>
            </div>
        </div>
    </div>

export default EachResult
