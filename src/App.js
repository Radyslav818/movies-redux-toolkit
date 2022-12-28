import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./componets/Home/Home";
import Header from "./componets/Header/Header";
import MovieDetail from "./componets/MovieDetail/MovieDetail";
import PageNotFound from "./componets/PageNotFound/PageNotFound";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
