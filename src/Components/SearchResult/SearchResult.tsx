import * as React from 'react'
import styles from './SearchResult.module.scss'

import EachResult from './EachResult/EachResult'

class SearchResult extends React.Component {
    public render() {
        return (
            <section className={styles.searchContainer}>
                <p className={styles.searchText}>
                    Please enter query and click SEARCH button above, results appear here.
                </p>
                <div className={styles.resultContainer}>
                    <EachResult />
                    <EachResult />
                    <EachResult />
                </div>
            </section>
        )
    }
}

export default SearchResult