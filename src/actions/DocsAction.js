import { getDocsRoute, docsSearchRoute } from "../routes";

/*---------------------------------------------*/

const getDocsRequest = (courseId) => {
    return {
        type: "GET_DOCS_REQUEST",
        payload: {
            courseId:courseId
        }
    }
}

const getDocsFailed = (courseId, err) => {
    return {
        type: "GET_DOCS_FAILED",
        payload: {
            courseId:courseId,
            error:err
        }
    }
}

const getDocsSuccess = (docs) => {
    return {
        type: "GET_DOCS_SUCCESS",
        payload: {
            docs:{
                data:docs
            }
        }
    }
}

const getDocsAction = (courseId) => {
    return (dispatch)=>{
        dispatch(getDocsRequest(courseId));

        getDocsRoute(courseId)
            .then((docs)=>{
                dispatch(getDocsSuccess(docs));
            })
            .catch((err)=>{
                dispatch(getDocsFailed(courseId, err));
            })
    }
}

/*-----------------------------------------------*/

const docsSearchRequest = () => {
    return {
        type: "DOCS_SEARCH_REQUEST",
        payload: {

        }
    }
}

const docsSearchFailed = () => {
    return {
        type: "DOCS_SEARCH_FAILED",
        payload: {

        }
    }
}

const docsSearchSuccess = () => {
    return {
        type: "DOCS_SEARCH_SUCCESS",
        payload: {

        }
    }
}

const docsSearchAction = (dispatch) => {

}

/*-------------------------------------------*/

export { docsSearchAction, getDocsAction };