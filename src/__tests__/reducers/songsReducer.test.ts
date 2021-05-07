import IReducerAction from "../../interfaces/IReducerAction";
import reducer from "./../../store/reducers/songsReducer";
import * as actions from "./../../store/actions/ActionTypes";
import { songs } from "../../utils/dataTest/songs";

describe("songs reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: "default" })).toEqual({
            songs: []
        });
    })

    it("should handle LOAD_SONGS", () => {
        const action: IReducerAction = {
            type: actions.LOAD_SONGS,
            payload: {
                songs: songs,
            }
        }
        expect(reducer(undefined, action)).toEqual({
            songs: songs
        });

    })

})
