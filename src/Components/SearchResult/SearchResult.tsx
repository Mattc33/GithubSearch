import * as React from 'react'
import styles from './SearchResult.module.scss'

class SearchResult extends React.Component {
    public render() {
        return (
            <section className={styles.searchContainer}>
                <p className={styles.searchText}>
                    Please enter query and click SEARCH button above, results appear here.
                </p>
            </section>
        )
    }
}

export default SearchResult