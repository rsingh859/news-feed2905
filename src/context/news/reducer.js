export const initialState = {
    url:'http://newsapi.org/v2/everything?domains=wsj.com&apiKey='
}

const reducer = (state = initialState, action) => {
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