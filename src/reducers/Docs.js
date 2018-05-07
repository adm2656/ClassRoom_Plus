const Docs = (state = {}, action) => {
    switch (action.type) {
        case "GET_DOCS_REQUEST": {
            return {
                ...action.payload,
                loading:true
            }
        }
        case "GET_DOCS_FAILED":{
            return{
                courseId:action.payload.courseId,
                error:action.payload.error
            }

        }
        case "GET_DOCS_SUCCESS":{
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default Docs;