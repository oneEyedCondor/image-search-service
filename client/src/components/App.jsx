import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import MainPage from "../containers/MainPage";
import HistoryPage from "../containers/HistoryPage";

export default ({ loadFavoriteImages, loadSearchHistory }) => {
  useEffect(() => {
    loadFavoriteImages();
    loadSearchHistory();
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/history" component={HistoryPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
