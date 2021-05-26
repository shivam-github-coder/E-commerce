import React from 'react';
import HomePage from './pages/Homepage';
import Cart from './component/Cart'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Routing = () => {
    console.log("aa gya");
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">{HomePage}</Route>
                    <Route path="/Cart">{Cart}</Route>

                </Switch>
            </Router>
        </div>
    );
}

export default Routing;
