import * as React from 'react'
import styles from './ResultContainer.module.scss'
import { connect } from 'react-redux'

import EachResult from './EachResult/EachResult'
interface ISearchResultState { queryResults: [], }

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
        queryResults: state.queryResults
    }
}

export default connect(mapStateToProps)(ResultContainer)