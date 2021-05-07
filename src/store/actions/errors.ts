import * as actions from "./ActionTypes";

export const newError = (error: string) => {
    return {
        type: actions.NEW_ERROR,
        payload: {
            error
        }
    }
}

export const clearErrors = () => {
    return {
        type: actions.CLEAR_ERRORS
    }
}