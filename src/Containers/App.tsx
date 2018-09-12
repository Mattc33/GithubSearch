import * as React from 'react'
import styles from './App.module.scss'

import GithubRepoSearch from './GithubRepoSearch/GithubRepoSearch'
import Header from './../Components/Header/Header'
import Footer from './../Components/Footer/Footer'

class App extends React.Component {
    public render() {
        return (
            <div className={styles.appContainer}>
                <Header />
                <GithubRepoSearch/>
                <Footer />
            </div>
        )
    }
}

export default App
