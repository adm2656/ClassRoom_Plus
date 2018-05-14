const Course = (state = {}, action) => {
    switch (action.type) {
        case "GET_COURSE_REQUEST": {
            return {
                ...action.payload,
                loading: true
            }
        }
        case "GET_COURSE_SUCCESS": {
            return {
                category: action.payload.category,
                courses: {
                    ...action.payload.courses
                }
            }
        }
        case "GET_COURSE_FAILED": {
            return {
                category: action.payload.category,
                error: action.payload.error
            }
        }
        case "CURRENT_COURSE_ID":{
            return {
                ...action.payload
            }
        }
        case "ADD_COURSE_REQUEST":{
            return {
                ...action.payload
            }
        }
        case "ADD_COURSE_SUCCESS":{
            return {
                ...action.payload
            }
        }
        case "ADD_COURSE_FAILED":{
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default Course;