import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "./pages";
import NotFound from "./NotFound";
import firebase from "./service/auth";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Redirect to="/forbidden" path="" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
