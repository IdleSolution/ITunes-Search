import IReducerAction from "../../interfaces/IReducerAction";
import reducer from "./../../store/reducers/albumsReducer";
import * as actions from "./../../store/actions/ActionTypes";
import { albums } from "../../utils/dataTest/albums";

describe("albums reucer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: "default" })).toEqual({
            albums: [],
            searchString: "",
            searched: false
        });
    })

    it("should handle LOAD_ALBUMS", () => {
        const action: IReducerAction = {
            type: actions.LOAD_ALBUMS,
            payload: {
                albums: albums,
                searchString: "test"
            }
        }
        expect(reducer(undefined, action)).toEqual({
            albums: albums,
            searched: true,
            searchString: "test"
        });
    })

    it("should handle UNLOAD_ALBUMS", () => {
        const action: IReducerAction = {
            type: actions.UNLOAD_ALBUMS,
        }
        expect(reducer(undefined, action)).toEqual({
            albums: [],
            searched: false,
            searchString: ""
        });
    })
})
