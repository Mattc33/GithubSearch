import * as React from 'react'
import styles from './Form.module.css'
import { connect } from 'react-redux'

import GithubSearchApi from '../../APIs/github-search.api'
import ParseResultData from '../../Utils/ParseResultData.Utils'
import LicenseSelect from './LicenseSelect/LicenseSelect'
import IsForkedCheckbox from './IsForkedCheckbox/IsForkedCheckbox'

interface IFormState { text: string, license: string, stars: string, isForked: string, 
                       onTextChange: any, onLicenseChange: any, onStarsChange: any, 
                       onIsForkedChange: any, onSearchClick: any, onQuerySuccess: any,
                       onLoadingSpinner: any, onNumberOfResults: any
                    }

class Form extends React.Component<IFormState> {

    public state = {
        disabledSearchBtn: true,
        isStarError: false
    }

    public render() {
        return (
            <div className={styles.formContainer}>
                <h1 className={styles.searchTitle}>Even Financial Github Repository Search</h1>
                <div className={styles.inputContainer}>

                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="textInput">Text</label>
                        <input 
                            type="text" 
                            id="textInput" 
                            className={`${styles.textInput} ${styles.formUI}`}
                            onChange={this.getText}
                        />
                    </div>

                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="starsInput">Stars</label>
                        <input 
                            type="select" 
                            className={`${styles.starsInput} ${styles.formUI}`}
                            onChange={this.getStars}
                            onBlur={this.onStarsBlur}
                        />
                        <span className={this.state.isStarError ? styles.starsInputError : styles.noError}>
                            Error: Invalid Stars Search Entry Check&nbsp;
                            <a target="_blank" href="https://help.github.com/articles/searching-for-repositories/#search-by-number-of-stars">Docs</a>
                        </span>
                    </div>

                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="licenseInput">License</label>
                        <LicenseSelect 
                            className={`${styles.licenseInput} ${styles.formUI}`}
                            onChange={this.props.onLicenseChange}
                        />
                    </div>

                    <IsForkedCheckbox onClick={this.props.onIsForkedChange}/>

                </div>
                <div className={styles.searchContainer}>
                    <button className={styles.search} onClick={this.submitForm} disabled={this.state.disabledSearchBtn}>SEARCH</button>
                </div>
            </div>
        )
    }

    // ====================================================================================================================
    // * Form API
    // ====================================================================================================================
    private submitForm = (): void => {
        if (this.props.text.length > 0) {
            this.props.onSearchClick(true)
            this.fetchResults()
        } else {
            this.props.onSearchClick(false)
        }
    }

    private fetchResults = () => {
        this.props.onQuerySuccess([])
        this.props.onLoadingSpinner(true)
        new GithubSearchApi().getGithubSearchResults(this.props.text, this.props.license, this.props.stars, this.props.isForked)
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
    }

    // ====================================================================================================================
    // * Form UI Events
    // ====================================================================================================================
    private getText = (e: any) => {
        this.props.onTextChange(e.target.value)
        this.toggleSearchBtn(e.target.value.length)
    }

    private getStars = (e: any) => 
        this.isStarsInputInvalid(e.target.value)
    
    private onStarsBlur = (e: any) => 
        this.isStarsInputInvalid(e.target.value)
    
    private isStarsInputInvalid = (starsInput: string): void => {
        const matchOnlyNum = starsInput.match(/^[0-9]*$/g)
        const matchOperator = starsInput.match(/(<|>|<=|>=)([0-9]*)\w+/)
        const matchRange = starsInput.match(/(\w*[0-9][0-9]\.\.\w*[0-9])/)
        if((matchOnlyNum !== null || matchOperator !== null || matchRange !== null) || starsInput === '') { 
            this.setState({isStarError: false, disabledSearchBtn: false})
            this.props.onStarsChange(starsInput)
        } else {
            this.setState({isStarError: true, disabledSearchBtn: true})
            this.props.onStarsChange('')
        }
    }
    
    private toggleSearchBtn = (textLen: number) => 
        textLen > 0 ? this.setState({disabledSearchBtn: false}) : this.setState({disabledSearchBtn: true})

}

const mapStateToProps = (state: any) => {
    return {
        text: state.form.text,
        license: state.form.license,
        stars: state.form.stars,
        isForked: state.form.isForked
    }
}

const mapDispachToProps = (dispatch: any) => {
    return {
        onSearchClick: (active: boolean) => dispatch({type: 'ACTIVATE_SUBMIT', val: active}),
        onTextChange: (textVal: string) => dispatch({type: 'NEW_TEXT_QUERY', val: textVal}),
        onLicenseChange: (e: any) => dispatch({type: 'NEW_LICENSE_QUERY', val: '+license:' + e.target.value}),
        onStarsChange: (starsInput: string) => {
            return (starsInput === '')
                ? dispatch({type: 'NEW_STAR_QUERY', val: ''}) 
                : dispatch({type: 'NEW_STAR_QUERY', val: '+stars:' + starsInput})
        },
        onIsForkedChange: (e: any) => {
            return (e.target.checked) 
                ? dispatch({type: 'ISFORKED_QUERY', val: '+fork:' + 'true'})
                : dispatch({type: 'ISFORKED_QUERY', val: ''})
        },
        onQuerySuccess: (queryResults: []) => dispatch({type: 'QUERY_RESULTS', val: queryResults}),
        onLoadingSpinner: (isLoading: boolean) => dispatch({type: 'ISLOADING', val: isLoading}),
        onNumberOfResults: (results: number) => dispatch({type: 'NEW_RESULTS_AMOUNT', val: results})
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Form)