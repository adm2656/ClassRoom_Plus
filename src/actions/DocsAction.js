import { getDocsRoute, docsSearchRoute } from "../routes";

const getDocsRequest = () => {
    return {
        type: "GET_DOCS_REQUEST",
        payload: {

        }
    }
}

const getDocsFailed = () => {
    return {
        type: "GET_DOCS_FAILED",
        payload: {

        }
    }
}

const getDocsSuccess = () => {
    return {
        type: "GET_DOCS_SUCCESS",
        payload: {

        }
    }
}

const getDocsAction = (dispatch) => {

}

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

export { docsSearchAction, getDocsAction };