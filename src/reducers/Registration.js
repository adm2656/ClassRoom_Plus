const Registration = (state={}, action) => {
    switch(action.type){
        case "SIGNUP_REQUEST":{
            return {
                username:action.payload.username,
                loading:true
            }
        }
        case "SIGNUP_FAILED":{
            return {
                user:{
                    username:action.payload.username
                },
                status:action.payload.status,
                errors:action.payload.errors
            }
        }
        case "SIGNUP_SUCCESS":{
            return {}
        }
        default:{
            return state;
        }
    }
}

export default Registration;