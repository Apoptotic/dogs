import React from "react";
import { Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Header from "./modules/header/Header";
import Home from "./modules/home/Home";
import Footer from "./modules/footer/Footer";
import BreedsList from "./modules/breeds/BreedsList";
import About from "./modules/about/About";

function App() {
  return (
    <StylesProvider injectFirst>
      <Header />
      <Switch>
        <Route path="/breed-list">
          <BreedsList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </StylesProvider>
  );
}

export default App;
