export const initialState = {
    url:'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'SET_URL':
            return {
                ...state,
                url: action.url
            }
        default:
            return state;
    }
}

export default reducer;