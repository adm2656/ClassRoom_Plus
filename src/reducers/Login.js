const initialState={
    user:{
        username:"",
        password:""
    },
    isAuthenticated:false
};

const Login=(state=initialState, action)=>{
    switch(action.type){
        case "USERNAMECHANGE":{
            return {
                user:{
                    username:action.payload.username,
                    password:state.user.password
                },
                isAuthenticated:state.isAuthenticated
            }
        }
        case "PASSWORDCHANGE":{
            return {
                user:{
                    username:state.user.username,
                    password:action.payload.password
                },
                isAuthenticated:state.isAuthenticated
            }
        }
        default:{
            return state;
        }
    }
}

export default Login;