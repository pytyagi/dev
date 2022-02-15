import React, { Fragment, useEffect, Profiler } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "../src/actions/auth";
import setAuthToken from "../src/utils/setAuthToken";
import { LOGOUT } from "./actions/types";
import AppRoutes from "./components/routing/AppRoutes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
 useEffect(() => {
     // check for token in LS when app first runs
     if (localStorage.token) {
         // if there is a token set axios headers for all requests
         setAuthToken(localStorage.token);
     }
     // try to fetch a user, if no token or invalid token we
     // will get a 401 response from our API
     store.dispatch(loadUser());

     // log user out from all tabs if they log out in one tab
     window.addEventListener("storage", () => {
         if (!localStorage.token) store.dispatch({ type: LOGOUT });
     });
 }, []);

  return (
      <Provider store={store}>
          <Router>
              <Fragment>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route component={AppRoutes} />
                  </Switch>
              </Fragment>
          </Router>
      </Provider>
  );
};
export default App;
