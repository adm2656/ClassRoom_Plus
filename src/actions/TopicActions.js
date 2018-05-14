import { getTopicRoute } from "../routes";

const getTopicAction = (courseId) => {
    return (dispatch) => {
        dispatch(getTopicRequest(courseId));

        getTopicRoute(courseId)
            .then((topics) => {
                console.log(topics);
                dispatch(getTopicSuccess(topics));
            })
            .catch((err) => {
                dispatch(getTopicFailed(courseId, err));
            })
    }
}

const getTopicRequest = (courseId) => {
    return {
        type: "GET_TOPIC_REQUEST",
        payload: {
            courseId: courseId
        }
    }
}

const getTopicFailed = (courseId, err) => {
    return {
        type: "GET_TOPIC_FAILED",
        payload: {
            courseId: courseId,
            errors: err
        }
    }
}

const getTopicSuccess = (topics) => {
    return {
        type: "GET_TOPIC_SUCCESS",
        payload: {
            data: {
                topics
            }
        }
    }
}

export { getTopicAction };
