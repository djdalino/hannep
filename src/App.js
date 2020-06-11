import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
