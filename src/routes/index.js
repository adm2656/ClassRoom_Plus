const URL = "http://35.229.133.151:8080/api";

export const loginRoute = async (username, password) => {
    let reqOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    };

    let URLi = URL + "/account/signIn";
    try {
        let response = await fetch(URLi, reqOption);
        return await response.json();
    }
    catch (error) {
        return await Promise.reject(error);
    }
}

export const signupRoute = async (user) => {
    let reqOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...user
        })
    };

    let URLi = URL + "/account/signUp";

    try {
        let response = await fetch(URLi, reqOption);
        return await response.json();
    }
    catch (error) {
        return await Promise.reject(error);
    }
}

export const getAllCourseRoute = async () => {
    let reqOption = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    let URLi = URL + "/course";

    try {
        let response = await fetch(URLi, reqOption);
        return await response.json();
    }
    catch (err) {
        return await Promise.reject(err);
    }
}

export const getUserCourseRoute = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let auth = "Bearer " + user.user.token;
    let reqOption = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth
        }
    }

    let URLi = URL + "/course/self";

    try {
        let response = await fetch(URLi, reqOption);
        
        if (await response.status === 401 || await response.status === 403) {
            return await Promise.reject(new Error("token expired"));
        }
        else {
            return await response.json();
        }
    }
    catch (err) {
        return await Promise.reject(err);
    }
}

export const getDocsRoute = async (courseId) => {
    let user = JSON.parse(localStorage.getItem("user"));
    let auth = "Bearer " + user.user.token;
    let reqOption = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth
        }
    }

    let URLi = URL + "/material/courseId/" + courseId;

    try {
        let response = await fetch(URLi, reqOption);

        if (await response.status === 401 || await response.status === 403) {
            return await Promise.reject(new Error("token expired"));
        }
        else {
            return await response.json();
        }
    }
    catch (err) {
        return await Promise.reject(err);
    }
}

export const docsSearchRoute = async (courseId, string) => {
    let user = JSON.parse(localStorage.getItem("user"));
    let auth = "Bearer " + user.user.token;
    let reqOption = {
        method: "",
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth
        },
        body: JSON.stringify({

        })
    }

    let URLi = URL + "";

    try {
        let response = await fetch(URLi, reqOption);
        return await response.json();
    }
    catch (err) {
        return await Promise.reject(err);
    }
}
