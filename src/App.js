// import "./App.css";
import { Fragment } from "react";
import Dashboard from "./components/leads/Dashboard";
import Header from "./layout/Header";
import store from "./store";
import { Provider } from "react-redux";

import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
