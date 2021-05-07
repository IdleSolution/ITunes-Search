import IReducerAction from "../../interfaces/IReducerAction";
import reducer from "./../../store/reducers/loadingReducer";
import * as actions from "./../../store/actions/ActionTypes";

describe("loading reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: "default" })).toEqual({
            loading: false
        });
    })

    it("should handle START_LOADING", () => {
        const action: IReducerAction = {
            type: actions.START_LOADING,

        }
        expect(reducer(undefined, action)).toEqual({
            loading: true
        });

    })

    it("should handle STOP_LOADING", () => {
        const action: IReducerAction = {
            type: actions.STOP_LOADING,

        }
        expect(reducer(undefined, action)).toEqual({
            loading: false
        });

    })

})
