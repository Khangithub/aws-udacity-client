import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
