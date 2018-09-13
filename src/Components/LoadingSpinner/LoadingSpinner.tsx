import * as React from 'react'
import styles from './LoadingSpinner.module.css'
import spinner from '../../Assets/ball-triangle.svg'

const LoadingSpinner = () => 
    <div className={styles.spinner}>
        <img src={spinner} alt="spinner"/>
    </div>

export default LoadingSpinner