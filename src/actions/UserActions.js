import {loginRoute, signupRoute} from "../routes";

const loginAction = (username, password) => {
    return (dispatch)=>{
        dispatch(loginRequest(username));

        loginRoute(username, password)
            .then((user) => {
                if(user.status && user.username === username && user.token){
                    localStorage.setItem("user", JSON.stringify({
                        user:{
                            username:user.username,
                            token:user.token
                        }
                    }));
                    dispatch(loginSuccess(user));
                }
                else{
                    //console.log(user.errors);
                    dispatch(loginFailed(username, user));
                }
            })
            .catch((err) => {
                dispatch(loginFailed(username, err));
            });
            
    }
}

const loginRequest = (username) =>{
    return {
        type:"LOGIN_REQUEST",
        payload:{
            username:username
        }
    }
}

const loginFailed = (username, err) =>{
    return {
        type:"LOGIN_FAILED",
        payload:{
            username:username,
            ...err
        }
    }
}

const loginSuccess = (user) =>{
    return {
        type:"LOGIN_SUCCESS",
        payload:{
            ...user
        }
    };
}

export { loginAction };