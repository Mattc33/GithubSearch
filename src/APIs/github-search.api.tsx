import axios from 'axios'

export default class GithubSearchApi {

    private url = 'http://api.github.com/search/repositories?'

    public getGithubSearchResults = (text: string): Promise<any> => {
        return axios.get(`${this.url}q=${text}`)
            .catch(err => {
                console.log(err)
            })
    }
}

// q=${text}+