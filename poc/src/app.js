import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory( { queryKey: false } );
import App from './js/components/App';
import Logout from './js/components/Logout';
import RiskSourceConfig from './js/riskSourceConfig/RiskSourceConfig';
import Dashboard from './js/dashboard/dashboard';
import Adjustment from './js/adjustment/adjustment';
import DataExtraction from './js/dataextraction/dataextraction';
import PageNotFound from './js/components/PageNotFound';

const routes = (
  <Router history={ history }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Dashboard } />
      <Route path='RisksourceConfig' component={ RiskSourceConfig }/>
      <Route path='Adjustment' component={ Adjustment }/>
      <Route path='DataExtraction' component={ DataExtraction } />
      <Route path='Dashboard' component={ Dashboard } />
      <Route path='Logout' component={ Logout } />
      <Route path='*' component={ PageNotFound }/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#root'));
