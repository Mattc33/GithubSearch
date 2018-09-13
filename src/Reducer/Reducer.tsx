const initialState = {
    activateSearchResults: false,
    queryResults: [],
    isLoading: false,
    numberOfResults: 0,
    form: {
        text: '',
        license: '',
        stars: '',
        isForked: ''
    }
}

const reducer = (state = initialState, action: any) => {
    const newState = {...state}

    switch(action.type) {
        case 'ACTIVATE_SUBMIT':
            newState.activateSearchResults = action.val
            break
            
        case 'NEW_TEXT_QUERY':
            newState.form.text = action.val
            break

        case 'NEW_LICENSE_QUERY':
            newState.form.license = action.val
            break

        case 'NEW_STAR_QUERY':
            newState.form.stars = action.val
            break

        case 'ISFORKED_QUERY':
            newState.form.isForked = action.val
            break

        case 'QUERY_RESULTS':
            newState.queryResults = action.val
            break

        case 'ISLOADING':
            newState.isLoading = action.val
            break

        case 'NEW_RESULTS_AMOUNT':
            newState.numberOfResults = action.val
    }
    console.log(newState)
    return newState
}

export default reducer