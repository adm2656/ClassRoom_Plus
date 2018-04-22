export const signup=(username, password)=>{
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
