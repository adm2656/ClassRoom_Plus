const Search = (state = {}, action) => {
    switch (action.type) {
        case "DOCS_SEARCH_REQUEST": {
            return {
                ...action.payload
            }
        }
        case "DOCS_SEARCH_FAILED": {
            return {
                ...action.payload
            }
        }
        case "DOCS_SEARCH_SUCCESS": {
            return {
                ...action.payload
            }
        }
        case "DOCS_SEARCH_END": {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default Search;