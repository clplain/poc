import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory( { queryKey: false } );
import App from './js/components/App';
import Home from './js/components/Home';
import fileUpload from './js/components/fileUpload';
import dashboard from './js/dashboard/demo';
import PageNotFound from './js/components/PageNotFound';
const routes = (
  <Router history={ history }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='fileUpload' component={ fileUpload }/>
      <Route path='dashboard' component={ dashboard } />
      <Route path='*' component={ PageNotFound }/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#root'));
