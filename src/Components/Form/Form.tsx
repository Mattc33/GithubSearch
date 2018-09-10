import * as React from 'react'
import styles from './Form.module.scss'

import GithubSearchApi from '../../APIs/github-search.api'
import LicenseSelect from './LicenseSelect/LicenseSelect'
import IsForkedCheckbox from './IsForkedCheckbox/IsForkedCheckbox'

class Form extends React.Component {

    public state = {
        disabledSearchBtn: true
    }

    private formData = {
        text: '',
        license: '',
        stars: '',
        isForked: ''
    }

    public fetchRequest = () => {
        new GithubSearchApi().getGithubSearchResults(this.formData.text, this.formData.license, this.formData.stars, this.formData.isForked)
            .then( res => {
                console.log(res.data)
                const resultData = res.data.items.map( (eaResult: any) => {
                    let license: string = ''
                    if (eaResult.license !== null) {
                        license = eaResult.license.name
                    }
                    return {
                            repoName: eaResult.full_name,
                            repoOwnerName: eaResult.owner.login,
                            urlToRepo: eaResult.html_url,
                            description: eaResult.description,
                            numberOfStars: eaResult.stargazers_count,
                            license: `${license}`,
                            isForked: eaResult.fork
                    }
                })

                console.log(resultData)
                // redux store the results for SearchResult Component to use
            })
    }

    // ====================================================================================================================
    // * Form UI Events
    // ====================================================================================================================
    public getText = (e: any) => {
        this.formData.text = e.target.value
        this.toggleSearchBtn()
    }

    public licenseChange = (e: any) => 
        this.formData.license = '+license:' + e.target.value 
    
    public getStars = (e: any) => 
        this.formData.stars = '+stars:' + e.target.value
    
    public isForked = (e: any) => 
        e.target.checked ? this.formData.isForked = '+fork:' + 'true' : this.formData.isForked = ''
    
    public toggleSearchBtn = () => 
        this.formData.text.length > 0 ? this.setState({disabledSearchBtn: false}) : this.setState({disabledSearchBtn: true})

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
                        />
                    </div>

                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="licenseInput">License</label>
                        <LicenseSelect 
                            className={`${styles.licenseInput} ${styles.formUI}`}
                            onChange={this.licenseChange}
                        />
                    </div>

                    <IsForkedCheckbox onClick={this.isForked}/>

                </div>
                <div className={styles.searchContainer}>
                    <button className={styles.search} onClick={this.fetchRequest} disabled={this.state.disabledSearchBtn}>SEARCH</button>
                </div>
            </div>
        )
    }
}

export default Form