
export const usernameChange=(usernameInput)=>{
    return {
        type:"USERNAMECHANGE",
        payload:{
            username:usernameInput
        }
    }
}

export const passwordChange=(passwordInput)=>{
    return {
        type:"PASSWORDCHANGE",
        payload:{
            password:passwordInput
        }
    }
}