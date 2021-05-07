/* 
  Utility function that allows me to connect components to the redux store during testing
*/

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import albumsReducer from "../store/reducers/albumsReducer";
import loadingReducer from "../store/reducers/loadingReducer";
import songsReducer from "../store/reducers/songsReducer";
import errorsReducer from "../store/reducers/errorsReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  albums: albumsReducer,
  loading: loadingReducer,
  songs: songsReducer,
  errors: errorsReducer
})

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';

export { render };