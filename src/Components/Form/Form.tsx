import * as React from 'react'
import styles from './Form.module.scss'

class Form extends React.Component {
    public render() {
        return (
            <form className={styles.formContainer}>
                <h1 className={styles.searchTitle}>Even Financial Github Repository Search</h1>
                <div className={styles.inputContainer}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="checkbox" />
                </div>
                <button>SEARCH</button>
            </form>
        )
    }
}

export default Form