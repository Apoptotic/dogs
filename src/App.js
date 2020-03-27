import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./modules/header/Header";
import Home from "./modules/home/Home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/breed-list">
          <h1>BreedList</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
