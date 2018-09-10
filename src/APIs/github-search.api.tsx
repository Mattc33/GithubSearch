import axios from 'axios'

export default class GithubSearchApi {

    private url = 'http://api.github.com/search/repositories?'

    public getGithubSearchResults = (text: string, license?: string, stars?: string, isForked?: string): Promise<any> => {
        return axios.get(`${this.url}q=${text}${license}${stars}${isForked}`)
            .catch(err => {
                console.log(err)
            })
    }
}

// q=${text}+