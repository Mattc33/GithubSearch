import * as React from 'react'
import styles from './SearchResult.module.scss'
import { connect } from 'react-redux'

import ResultContainer from './ResultContainer/ResultContainer'
import SearchText from './SearchText/SearchText'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

interface ISearchResultState { active: boolean, text: string, license: string, queryResults: any, 
                               stars: string, isForked: string, onTextChange: any, isLoading: boolean }
class SearchResult extends React.Component<ISearchResultState> {

    public render() {

        const conditionalResults = () => {
            let jsx = <SearchText message='Please enter query and click SEARCH button above, results appear here.' />
            if(this.props.active) {
                jsx = <ResultContainer />
                if(this.props.queryResults.length === 0) {
                    jsx = <SearchText message='Query Returned No Results.' />
                }
            }
            return jsx
        }

        const conditionalSpinner = () => {
            if (this.props.isLoading) {
                return <LoadingSpinner />
            } else {
                return null
            }
        }

        return (
            <section className={styles.searchContainer}>
                {conditionalResults()}
                {conditionalSpinner()}
            </section>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        active: state.activateSearchResults,
        text: state.form.text,
        license: state.form.license,
        stars: state.form.stars,
        isForked: state.form.isForked,
        queryResults: state.queryResults,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SearchResult)