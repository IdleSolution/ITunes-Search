import IReducerAction from "../../interfaces/IReducerAction";
import reducer from "./../../store/reducers/errorsReducer";
import * as actions from "./../../store/actions/ActionTypes";

describe("errors reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: "default" })).toEqual({
            error: null
        });
    })

    it("should handle NEW_ERROR", () => {
        const action: IReducerAction = {
            type: actions.NEW_ERROR,
            payload: {
                error: "test error"
            }

        }
        expect(reducer(undefined, action)).toEqual({
            error: "test error"
        });

    })

    it("should handle CLEAR_ERRORS", () => {
        const action: IReducerAction = {
            type: actions.CLEAR_ERRORS,

        }
        expect(reducer(undefined, action)).toEqual({
            error: null
        });

    })

})
