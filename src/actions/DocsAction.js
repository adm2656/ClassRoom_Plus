import { getDocsRoute, docsSearchRoute } from "../routes";

/*---------------------------------------------*/

const getDocsRequest = (courseId) => {
    return {
        type: "GET_DOCS_REQUEST",
        payload: {
            courseId: courseId
        }
    }
}

const getDocsFailed = (courseId, err) => {
    return {
        type: "GET_DOCS_FAILED",
        payload: {
            courseId: courseId,
            error: err
        }
    }
}

const getDocsSuccess = (docs) => {
    return {
        type: "GET_DOCS_SUCCESS",
        payload: {
            docs: {
                data: docs
            }
        }
    }
}

const getDocsAction = (courseId) => {
    return (dispatch) => {
        dispatch(getDocsRequest(courseId));

        getDocsRoute(courseId)
            .then((docs) => {
                dispatch(getDocsSuccess(docs));
            })
            .catch((err) => {
                dispatch(getDocsFailed(courseId, err));
            })
    }
}

/*-----------------------------------------------*/

const docsSearchRequest = (value) => {
    return {
        type: "DOCS_SEARCH_REQUEST",
        payload: {
            keyword: value
        }
    }
}

const docsSearchFailed = (value, err) => {
    return {
        type: "DOCS_SEARCH_FAILED",
        payload: {
            keyword: value,
            errors: err
        }
    }
}

const docsSearchSuccess = (value, result) => {
    return {
        type: "DOCS_SEARCH_SUCCESS",
        payload: {
            keyword: value,
            result: result
        }
    }
}

const docsSearchAction = (courseId, value) => {

    return (dispatch) => {
        dispatch(docsSearchRequest(value));

        docsSearchRoute(courseId, value)
            .then((result) => {
                dispatch(docsSearchSuccess(value, result));
            })
            .catch((err) => {
                dispatch(docsSearchFailed(value, err));
            })
    }
}

const docsSearchEnd = () => {
    return {
        type: "DOCS_SEARCH_END",
        payload: {

        }
    }
}

/*-------------------------------------------*/

export { docsSearchAction, getDocsAction, docsSearchEnd };