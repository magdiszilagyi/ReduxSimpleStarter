import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import PostsIndex from './components/post_index';
import PostsNew from './components/post_new';
import PostShow from './components/post_show';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/post/new" component={PostsNew}/>
                    <Route path="/post/:id" component={PostShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
