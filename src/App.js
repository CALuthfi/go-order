import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./container/home";
import About from "./container/about";
import Contact from "./container/contact";
import Finis from "./container/finis";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/finis" component={Finis} />
        </Switch>
      </div>
    );
  }
}
export default App;
