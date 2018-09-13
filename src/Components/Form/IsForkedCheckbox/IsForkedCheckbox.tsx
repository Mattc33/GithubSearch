import * as React from 'react'
import styles from './IsForkedCheckbox.module.css'

const IsForkedCheckbox = (props: any) => 
    <div className={styles.checkbox}>
        <input type="checkbox" id="checkbox" onClick={props.onClick}/>
        <label htmlFor="checkbox"><span>Include Forked</span></label>
    </div>


export default IsForkedCheckbox