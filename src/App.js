import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import LoginForm from './components/LoginForm';
import Test from './components/Test';
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import './components/stylesheets/App.css';

function App({ needLogin, loadToken }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/test' component={Test} />
        <Route path ="/landing" component={LandingPage} />
        <ProtectedRoute
          path="/login"
          exact={true}
          needLogin={needLogin}
          component={LoginForm}
        />
        <PrivateRoute
          path="/"
          exact={true}
          needLogin={needLogin}
          component={MainPage}
        />

        <Redirect to="/" />

      </Switch>
    </BrowserRouter>
  );
}

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer;
