const URL = "http://35.229.133.151:8080/api";

export const loginRoute = async (username, password) => {
    let reqOption={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            password:password
        })
    };

    let URLi = URL + "/account/signIn";
    try {
        const response = await fetch(URLi, reqOption);
        //console.log(await response.json());
        return await response.json(); 
    }
    catch (error) {
        //console.log(error);
        return await Promise.reject(error);
    }
}

export const signupRoute = async () =>{

}