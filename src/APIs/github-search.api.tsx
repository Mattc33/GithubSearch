import axios from 'axios'

export default class GithubSearchApi {
    private url = 'https://api.github.com/search/repositories?'
    
    public getGithubSearchResults = (text: string, license?: string, stars?: string, isForked?: string, pageNum: string  = ''): Promise<any> => 
        axios.get(`${this.url}q=${text}${license}${stars}${isForked}${pageNum}&per_page=10`)
}

