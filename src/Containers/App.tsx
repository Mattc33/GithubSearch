import * as React from 'react'
import './App.module.scss'

import GithubRepoSearch from './GithubRepoSearch/GithubRepoSearch'

class App extends React.Component {
    public render() {
        return (
            <GithubRepoSearch/>
        )
    }
}

export default App;
