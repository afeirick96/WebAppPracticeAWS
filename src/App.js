import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Report from './Pages/report.js';
import Home from './Pages/home.js';




function App() {

    return (
        <div>
          <HashRouter>
            <Switch>
              <Route exact path="/" render={(props) => <Home/>} />
                
                 {/*this line of code creates a new route, this one refering to a new web page in a different folder called report*/}
              <Route exact path="/report" render={(props) => <Report/>} />
            </Switch>
          </HashRouter>
        </div>
    )
}

export default App;