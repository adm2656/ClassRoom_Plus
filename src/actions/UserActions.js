import {loginRoute, signupRoute} from "../routes";

const loginAction = (username, password) => {
    console.log("a");
    return (dispatch)=>{
        dispatch(loginRequest(username));

        loginRoute(username, password)
            .then((user) => {
                console.log(user);
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
                    dispatch(loginFailed(username));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(loginFailed(username));
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

const loginFailed = (username) =>{
    return {
        type:"LOGIN_FAILED",
        payload:{
            username:username
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

export { loginAction, loginRequest };