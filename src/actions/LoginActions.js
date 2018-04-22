export const login=(username, password)=>{
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
}