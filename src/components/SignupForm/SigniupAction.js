export const SignupAction=(username, password)=>{
    return {
        type:"SIGNUP",
        payload:{
            username:username,
            password:password
        }
    }
}
