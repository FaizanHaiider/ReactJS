import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {Switch, Route} from 'react-router-dom';

import store, {history} from './store';
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={App}/>
                { /* <Route path='/:id' component={Product}*/ }
                { /* 404 */ }
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
