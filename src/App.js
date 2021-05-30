// import "./App.css";
import { Fragment } from "react";
import Dashboard from "./components/leads/Dashboard";
import Header from "./layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
