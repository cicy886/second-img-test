import React from "react";
import CardSpreadControl from "./CardSpreadControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import CardControl from "./CardControl";
import CategoryControl from "./CategoryControl";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/category">
          <CategoryControl />
        </Route>
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
