/* eslint-disable no-useless-constructor */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";

import Header from './Header';
import Main from './Header';


const persistedState = {};

const store = createStore(
    persistedState,
    applyMiddleware(reduxThunk))

const Forums = () => (
    <Provider store={store} className="app">
        <main>
            <Header />
            <Main />
        </main>
    </Provider>
)


export default Forums;