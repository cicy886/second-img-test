import React from "react";
import CardSpreadControl from "./CardSpreadControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import CardControl from "./CardControl";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/cardSpread">
          <CardSpreadControl />
        </Route>
        <Route path="/">
          <CardControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
