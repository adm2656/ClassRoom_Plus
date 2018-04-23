const initialState={
    username:{
        rules:[{
            required:true,
            message:"Please input your username !"
        }]
    },
    password:{
        rules:[{
            required:true,
            message:"Please input your password !"
        }]
    },
    remember:{
        ValuePropName:"checked",
        initailValue:true
    }
};

const Login=(state=initialState, action)=>{
    switch(action.type){
        case "LOGIN":{
            return Object.assign({}, state, ...action.payload);
        }
        default:{
            return state;
        }
    }
}

export default Login;