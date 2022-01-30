import { useEffect, useState } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Create from './pages/create/Create';
import Form from './pages/form/Form';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="app">
        <Topbar />
        <Router>
            <Switch>
                <Route exact path='/create'>
                    <Create />
                </Route>
                <Route path='/form/:formId'>
                    <Form />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
