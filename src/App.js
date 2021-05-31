// import "./App.css";
import { Fragment } from "react";
import Dashboard from "./components/leads/Dashboard";
import Header from "./layout/Header";
import store from "./store";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import React, { Component } from "react";
import Alerts from "./layout/Alerts";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
