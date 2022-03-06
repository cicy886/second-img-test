import React from "react";
import CardSpread from "./CardSpread";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import CardControl from "./CardControl";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/cardSpread">
          <CardSpread />
        </Route>
        <Route path="/">
          <CardControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
