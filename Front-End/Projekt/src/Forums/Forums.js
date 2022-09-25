import React from 'react'
import { Provider } from 'react-redux';
import { createStore, ForumlyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import reducers from 'reducers';

const persistedState = {};
const store = createStore(
    reducers,
    persistedState,
    ForumlyMiddleware(reduxThunk))
const Forum = () => (
    <Provider store={store} className="Forum">
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    </Provider>
)
export default Forum;