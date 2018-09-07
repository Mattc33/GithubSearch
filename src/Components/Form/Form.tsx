import * as React from 'react'
import styles from './Form.module.scss'

import GithubSearchApi from '../../APIs/github-search.api'
class Form extends React.Component {

    private text: string

    public fetchRequest = () => {
        new GithubSearchApi().getGithubSearchResults(`${this.text}`)
            .then( res => {
                console.log(res)
            })
    }

    public getText = (e: any) => {
        this.text = e.target.value
    }

    public render() {
        return (
            <div className={styles.formContainer}>
                <h1 className={styles.searchTitle}>Even Financial Github Repository Search</h1>
                <div className={styles.inputContainer}>
                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="textInput">Text</label>
                        <input type="text" id="textInput" 
                        className={`${styles.textInput} ${styles.formUI}`}
                        onChange={this.getText}
                        />
                    </div>
                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="licenseInput">License</label>
                        <select id="licenseInput" className={`${styles.licenseInput} ${styles.formUI}`}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className={`${styles.formUIContainer}`}>
                        <label htmlFor="starsInput">Stars</label>
                        <input type="select" className={`${styles.starsInput} ${styles.formUI}`}/>
                    </div>
                    
                    {/* <label className={styles.forkedCheckbox}>
                        <input type="checkbox" /> 
                        <span className={`${styles.checkmark}`}/>
                    </label> */}
                </div>
                <div className={styles.searchContainer}>
                    <button className={styles.search} onClick={this.fetchRequest}>SEARCH</button>
                </div>
            </div>
        )
    }


}

export default Form