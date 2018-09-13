import * as React from 'react'
import styles from './SearchResult.module.css'
import { connect } from 'react-redux'

import GithubSearchApi from '../../APIs/github-search.api'
import ParseResultData from '../../Utils/ParseResultData.Utils'
import ResultContainer from './ResultContainer/ResultContainer'
import SearchText from './SearchText/SearchText'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import SearchPagination from '../SearchResult/SearchPagination/SearchPagination'

interface ISearchResultState { active: boolean, text: string, license: string, queryResults: any, 
                               stars: string, isForked: string, isLoading: boolean, numberOfResults: number, 
                               onSearchClick: any, onQuerySuccess: any, onLoadingSpinner: any,
                               onNumberOfResults: any
                            }
class SearchResult extends React.Component<ISearchResultState> {

    public state = {
        currentPaginationPage: 1
    }

    public render() {

        const conditionalResults = () => {
            let jsx = <SearchText message='Please enter query and click SEARCH button above, results appear here.' />
            if(this.props.active) {
                jsx = <ResultContainer />
                if(this.props.queryResults.length === 0 && !this.props.isLoading) {
                    jsx = <SearchText message='Query Returned No Results.' />
                }
            }
            return jsx
        }

        return (
            <section className={styles.searchContainer}>
                {conditionalResults()}
                {this.props.isLoading ? <LoadingSpinner /> : null}
                {this.props.active && !this.props.isLoading && this.props.queryResults.length > 0 
                    ? <SearchPagination numberOfResults={this.props.numberOfResults} onPageChange={this.onPageChange} currentPage={this.state.currentPaginationPage}/> 
                    : null
                }
            </section>
        )
    }

    private onPageChange = (currentPage: number) => {
        this.setState({currentPaginationPage: currentPage})
        this.fetchResults(currentPage)
    }

    private fetchResults = (pageNum: number) => {
        this.props.onQuerySuccess([])
        this.props.onLoadingSpinner(true)
        new GithubSearchApi().getGithubSearchResults(this.props.text, this.props.license, this.props.stars, this.props.isForked, `&page=${pageNum}`)
            .then( res => {
                if(res.status === 200) {
                    this.props.onNumberOfResults(res.data.total_count)
                    return ParseResultData(res.data.items)
                } 
            })
            .then( queryResults => {
                this.props.onLoadingSpinner(false)
                this.props.onQuerySuccess(queryResults)
            })
            .catch( err => {
                alert(err.message + ': Only the first 1000 search results are available')
            })
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
        isLoading: state.isLoading,
        numberOfResults: state.numberOfResults
    }
}

const mapDispachToProps = (dispatch: any) => {
    return {
        onSearchClick: (active: boolean) => dispatch({type: 'ACTIVATE_SUBMIT', val: active}),
        onQuerySuccess: (queryResults: []) => dispatch({type: 'QUERY_RESULTS', val: queryResults}),
        onLoadingSpinner: (isLoading: boolean) => dispatch({type: 'ISLOADING', val: isLoading}),
        onNumberOfResults: (results: number) => dispatch({type: 'NEW_RESULTS_AMOUNT', val: results})
    }
}

export default connect(mapStateToProps, mapDispachToProps)(SearchResult)