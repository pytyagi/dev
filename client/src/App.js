import React, { Fragment, useEffect, Profiler } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import PrivateRoute from "../src/components/routing/PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "../src/actions/auth";
import setAuthToken from "../src/utils/setAuthToken";
import Dashboard from "../src/components/dashboard/Dashboard";
import CreateProfile from "../src/components/profile-form/CreateProfile";
import EditProfile from "../src/components/profile-form/EditProfile";
import AddExperience from "../src/components/profile-form/AddExperience";
import AddEducation from "../src/components/profile-form/AddEducation";
import Profiles from "../src/components/profiles/Profiles";
import Profile from "../src/components/profile/Profile";
import Posts from "../src/components/posts/Posts";
import Post from "../src/components/post/Post";
import { LOGOUT } from "./actions/types";
import NotFound from "./components/layout/NotFound";

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
                  <Route exact path="/" component={Landing} />
                  <section className="container">
                      <Alert />
                      <Switch>
                          <Route exact path="/register" component={Register} />
                          <Route exact path="/login" component={Login} />
                          <Route exact path="/profiles" component={Profiles} />
                          <Route
                              exact
                              path="/profile/:id"
                              component={Profile}
                          />
                          <PrivateRoute
                              exact
                              path="/dashboard"
                              component={Dashboard}
                          />
                          <PrivateRoute
                              exact
                              path="/create-profile"
                              component={CreateProfile}
                          />
                          <PrivateRoute
                              exact
                              path="/edit-profile"
                              component={EditProfile}
                          />
                          <PrivateRoute
                              exact
                              path="/add-experience"
                              component={AddExperience}
                          />
                          <PrivateRoute
                              exact
                              path="/add-education"
                              component={AddEducation}
                          />
                          <PrivateRoute exact path="/posts" component={Posts} />
                          <PrivateRoute
                              exact
                              path="/posts/:id"
                              component={Post}
                          />
                          <Route path="/*" element={<NotFound />} />
                      </Switch>
                  </section>
              </Fragment>
          </Router>
      </Provider>
  );
};
export default App;
