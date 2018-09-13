import * as React from 'react'
import styles from './GithubRepoSearch.module.css'

import Form from '../../Components/Form/Form'
import SearchResult from '../../Components/SearchResult/SearchResult'

const GithubRepoSearch = () => 
    <div className={styles.githubAppContainer}>
        <Form />
        <SearchResult />
    </div>

export default GithubRepoSearch