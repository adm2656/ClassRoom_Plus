import { getAllCourseRoute, getUserCourseRoute } from "../routes";

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
            courses: {
                ...course
            }
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
                    dispatch(getCourseFailed(category, error));
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

export { getCourseAction };