export default function ParseResultData(resDataItems: any): any {
    return resDataItems.map( (eaResult: any) => {
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
}