// import "./App.css";
import { Fragment } from "react";
import Dashboard from "./components/leads/Dashboard";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Header from "./layout/Header";
import store from "./store";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import React, { Component } from "react";
import Alerts from "./layout/Alerts";
import PrivateRoute from "./components/common/PrivateRoute";

import { loadUser } from "./actions/auth";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
