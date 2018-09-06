import * as React from 'react'
import './App.module.scss'

import Auxx from './../Components/Auxx/Auxx'
import GithubRepoSearch from './GithubRepoSearch/GithubRepoSearch'
import Header from './../Components/Header/Header'
import Footer from './../Components/Footer/Footer'

class App extends React.Component {
    public render() {
        return (
            <Auxx>
                <Header />
                <GithubRepoSearch/>
                <Footer />
            </Auxx>
        )
    }
}

export default App
