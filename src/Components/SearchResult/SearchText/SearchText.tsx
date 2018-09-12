import * as React from 'react'
import styles from './SearchText.module.scss'

const SearchText = (props: any) => 
    <p className={styles.searchText}>{props.message}</p>

export default SearchText