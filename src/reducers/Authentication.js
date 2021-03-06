const initUser = JSON.parse(localStorage.getItem("user"));
const initialState = initUser ? { ...initUser, isAuthenticated: true } : { user: { username: "" }, isAuthenticated: false };

const Authentication = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST": {
            return {
                user: {
                    username: action.payload.username,
                },
                loading:true,
                isAuthenticated: false
            }
        }
        case "LOGIN_FAILED": {
            return {
                user: {
                    username: action.payload.username
                },
                isAuthenticated: false,
                errors: action.payload.errors
            }
        }
        case "LOGIN_SUCCESS": {
            return {
                user: {
                    ...action.payload
                },
                isAuthenticated: true
            }
        }
        case "LOGOUT_ACTION": {
            return {
                user: {
                    username: ""
                },
                isAuthenticated: false
            }
        }
        case "TOKEN_EXPIRED":{
            return {
                user:{
                    username:""
                },
                isAuthenticated:false
            }
        }
        default: {
            return state;
        }
    }
}

export default Authentication;