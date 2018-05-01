<<<<<<< HEAD:src/actions/LoginActions.js
export const login=(username, password)=>{
    return {
        type:"LOGIN",
        payload:{
            username:username,
            password:password
        }
    }
}

export const loginAction = (username, password) =>{
    return (dispatch)=>{
        
    }
=======
export const LoginAction=(username, password)=>{
    return {
        type:"LOGIN",
        payload:{
            username:{
                value:username
            },
            password:{
                value:password
            }
        }
    }
>>>>>>> aa99ef4d2cd0a7b14c8eb10379f52f3b5ffebc82:src/components/LoginForm/LoginAction.js
}