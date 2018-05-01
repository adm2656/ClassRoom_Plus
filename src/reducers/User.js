const initialState={
    user:{
        username:""
    },
    isAuthenticated:false
};

const UserInfo=(state=initialState, action)=>{
    switch(action.type){
        case "LOGIN_REQUEST":{
            return {
                user:{
                    username:action.payload.username
                },
                isAuthenticated:false
            }
        }
        case "LOGIN_FAILED":{
            return {
                user:{
                    ...action.payload
                },
                isAuthenticated:false
            }
        }
        case "LOGIN_SUCCESS":{
            return {
                user:{
                    ...action.payload
                },
                isAuthenticated:true
            }
        }
        default:{
            return state;
        }
    }
}

export default UserInfo;