export const signup=(username, password)=>{
    return {
        type:"SIGNUP",
        payload:{
            username:username,
            password:password
        }
    }
}
