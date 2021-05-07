import configureMockStore from 'redux-mock-store';
import { songs } from "../../utils/dataTest/songs"
import thunk from 'redux-thunk';
import { getSongs } from '../../store/actions';
import * as types from '../../store/actions/ActionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    test('getSongs action on success', () => {
        (fetchMock as jest.MockedFunction<any>).getOnce('https://itunes.apple.com/lookup?id=123&entity=song', {
            body: {
                results: songs,
            },
            headers: { 'content-type': 'application/json' }
        }, 200)

        const expectedActions = [
            { type: types.START_LOADING },
            { type: types.LOAD_SONGS, payload: { songs: songs } },
            { type: types.STOP_LOADING }
        ]
        const store = mockStore()

        return store.dispatch(getSongs(123) as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    test('getSongs action on failure', () => {
        (fetchMock as jest.MockedFunction<any>).getOnce('https://itunes.apple.com/lookup?id=123&entity=song', {
            throws: new Error("error"),
            headers: { 'content-type': 'application/json' }
        }, 400)

        const expectedActions = [
            { type: types.START_LOADING },
            { type: types.NEW_ERROR, payload: { 
                error: "Something went wrong while fetching the songs. It might be a problem with CORS that was occuring for some songs randomly." 
            }},
            { type: types.STOP_LOADING }
        ]
        const store = mockStore()

        return store.dispatch(getSongs(123) as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})