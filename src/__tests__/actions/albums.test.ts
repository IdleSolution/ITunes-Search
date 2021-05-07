import configureMockStore from 'redux-mock-store';
import { albums } from "../../utils/dataTest/albums"
import thunk from 'redux-thunk';
import { getAlbums } from '../../store/actions';
import * as types from '../../store/actions/ActionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    test('getAlbums action on success', () => {
        (fetchMock as jest.MockedFunction<any>).getOnce('https://itunes.apple.com/search?term=test&entity=album', {
            body: {
                results: albums,
            },
            headers: { 'content-type': 'application/json' }
        }, 200)

        const expectedActions = [
            { type: types.START_LOADING },
            { type: types.LOAD_ALBUMS, payload: { searchString: "test", albums: albums } },
            { type: types.STOP_LOADING }
        ]
        const store = mockStore()

        return store.dispatch(getAlbums("test") as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    test('getAlbums action on failure', () => {
        (fetchMock as jest.MockedFunction<any>).getOnce('https://itunes.apple.com/search?term=test&entity=album', {
            throws: new Error("error"),
            headers: { 'content-type': 'application/json' }
        }, 400)

        const expectedActions = [
            { type: types.START_LOADING },
            { type: types.NEW_ERROR, payload: { error: "Something went wrong while fetching albums" } },
            { type: types.STOP_LOADING }
        ]
        const store = mockStore()

        return store.dispatch(getAlbums("test") as any).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
