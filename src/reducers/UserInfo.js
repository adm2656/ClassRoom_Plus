const initialState={
    user:{
        username:"",
        password:""
    },
    //isAuthenticated:false,
    //isRegistered:true
};

const UserInfo=(state=initialState, action)=>{
    switch(action.type){
        case "LOGIN":{
            return {
                user:{
                    username:action.payload.username,
                    password:action.payload.password
                }
            }
        }
        case "SIGNUP":{
            return {
                user:{
                    username:action.payload.username,
                    password:action.payload.password
                }
            }
        }
        default:{
            return state;
        }
    }
}

export default UserInfo;