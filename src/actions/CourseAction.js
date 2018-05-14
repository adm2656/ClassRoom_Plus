import { getAllCourseRoute, getUserCourseRoute, addCourseRoute } from "../routes";
import { tokenExpired } from "./UserActions";

const getCourseRequest = (category) => {
    return {
        type: "GET_COURSE_REQUEST",
        payload: {
            category: category
        }
    }
}

const getCourseSuccess = (category, course) => {
    return {
        type: "GET_COURSE_SUCCESS",
        payload: {
            category: category,
            courses: course
        }
    }
}

const getCourseFailed = (category, err) => {
    return {
        type: "GET_COURSE_FAILED",
        payload: {
            category: category,
            error: err
        }
    }
}

const getCourseAction = () => {
    let category = "all";

    if (localStorage.getItem("user")) {
        category = "user";
    }

    return (dispatch) => {
        dispatch(getCourseRequest(category));

        if (category === "user") {
            getUserCourseRoute()
                .then((course) => {
                    if (course.status) {
                        dispatch(getCourseSuccess(category, course));
                    }
                    else {
                        dispatch(getCourseFailed(category, course));
                    }
                })
                .catch((error) => {
                    if (error.message === "token expired") {
                        dispatch(tokenExpired());
                    }
                    else {
                        dispatch(getCourseFailed(category, error));
                    }
                });
        }
        else {
            getAllCourseRoute()
                .then((course) => {
                    dispatch(getCourseSuccess(category, course));
                })
                .catch((error) => {
                    dispatch(getCourseFailed(category, error));
                });
        }
    }
}

/*----------------------------*/

const currentCourseId = (id) => {
    return {
        type: "CURRENT_COURSE_ID",
        payload: {
            currentCourse: id
        }
    }
}

/*--------------------------*/

const addCourseAction = (type, name, info) => {
    return (dispatch) => {
        dispatch(addCourseRequest(name));

        addCourseRoute(type, name, info)
            .then((newCourse) => {
                console.log(newCourse);
                dispatch(addCourseSuccess(name));
            })
            .catch((err) => {
                console.log(err);
                dispatch(addCourseFailed(name, err));
            })
    }
}

const addCourseRequest = (courseName) => {
    return {
        type: "ADD_COURSE_REQUEST",
        payload: {
            courseName: courseName
        }
    }
}

const addCourseSuccess = (courseName) => {
    return {
        type: "ADD_COURSE_SUCCESS",
        payload: {
            courseName: courseName
        }
    }
}

const addCourseFailed = (courseName, err) => {
    return {
        type: "ADD_COURSE_FAILED",
        payload: {
            courseName: courseName,
            errors: err
        }
    }
}

export { getCourseAction, currentCourseId, addCourseAction };