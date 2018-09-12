import * as React from 'react'
import styles from './ResultContainer.module.scss'
import { connect } from 'react-redux'

import EachResult from './EachResult/EachResult'

interface ISearchResultState { active: boolean, text: string, license: string, queryResults: any, 
    stars: string, isForked: string, onTextChange: any, isLoading: boolean }

class ResultContainer extends React.Component<ISearchResultState> {

    public render() {
        return (
            <div className={styles.resultContainer}>
                <p className={styles.searchText}>
                    SEARCH Results:
                </p>
                {
                    this.props.queryResults.map( (eaResult: any, index: number) => {
                        return <EachResult 
                                    key={index}
                                    repoName={eaResult.repoName}
                                    description={eaResult.description}
                                    isForked={eaResult.isForked}
                                    numberOfStars={eaResult.numberOfStars}
                                    license={eaResult.license}
                                    urlToRepo={eaResult.urlToRepo}
                                />
                    })
                }
            </div>
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

export default connect(mapStateToProps)(ResultContainer)