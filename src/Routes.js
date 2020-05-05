import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from './Login';
import Enroll from './Enroll/Enroll';
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Enroll" component={Enroll} />
                </Switch>
            </Router>
        )
    }
}