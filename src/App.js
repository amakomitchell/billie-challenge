import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SideNav from "./components/side-nav/SideNav";
import Home from "./components/pages/Home";
import Integrations from "./components/pages/Integration";
import Companies from "./components/companies/Companies";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="flex flex-col md:flex-row w-screen h-screen bg-gray-700 overflow-hidden">
          <div className="md:flex bg-white">
            <SideNav />
          </div>
          <div className="bg-gray-100 flex-1 px-4 md:px-0 md:w-auto">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/integrations" component={Integrations} />
              <Route path="/companies" component={Companies} />
            </Switch>
          </div>
        </div>
      </Router>

      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
