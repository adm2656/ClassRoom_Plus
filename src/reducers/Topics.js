const Topics = (state = {}, action) => {
    switch (action.type) {
        case "GET_TOPIC_REQUEST": {
            return {
                ...action.payload
            }
        }
        case "GET_TOPIC_FAILED": {
            return {
                ...action.payload
            }
        }
        case "GET_TOPIC_SUCCESS": {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default Topics;