
export const login=(username, password, remember)=>{
    return {
        type:"LOGIN",
        payload:{
            username:{
                value:username
            },
            password:{
                value:password
            },
            remember:{
                save:remember
            }
        }
    }
}
