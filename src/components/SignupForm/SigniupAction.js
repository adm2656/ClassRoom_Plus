export const SignupAction=(username, password)=>{
    return {
        type:"SIGNUP",
        payload:{
            username:{
                value:username
            },
            password:{
                value:password
            }
        }
    }
}
