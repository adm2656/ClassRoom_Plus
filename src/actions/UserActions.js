import { loginRoute, signupRoute } from "../routes";
import history from "../helpers/history";

/*----------------------------------------------*/

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
                    history.push("/index");
                }
                else{
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
            errors:err.errors
        }
    }
}

const loginSuccess = (user) =>{
    return {
        type:"LOGIN_SUCCESS",
        payload:{
            username:user.username,
            token:user.token
        }
    };
}

/*----------------------------------------------*/

const signupAction = (user) => {
    return (dispatch) => {
        dispatch(signupRequest(user.username));
        
        signupRoute(user)
            .then((res) => {
                if(res.status){
                    dispatch(signupSuccess(res));
                    history.push("/");
                }
                else{
                    dispatch(signupFailed(user, res))
                }
            })
            .catch((err) => {
                dispatch(signupFailed(user, err));
            });
    }
}

const signupRequest = (username) => {
    return {
        type:"SIGNUP_REQUEST",
        payload:{
            username:username
        }
    }
}

const signupSuccess = (res) => {
    return {
        type:"SIGNUP_SUCCESS",
        payload:{
            ...res
        }
    }
}

const signupFailed = (user, err) => {
    return {
        type:"SIGNUP_FAILED",
        payload:{
            ...user,
            ...err
        }
    }
}

/*----------------------------------------------*/

export { loginAction, signupAction };