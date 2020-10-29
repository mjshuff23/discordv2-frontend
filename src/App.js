import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import LoginForm from './components/LoginForm';
import Test from './components/Test';
import SignUpForm from "./components/SignUpForm";

function App({ needLogin, loadToken }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path ="/signup" component={SignUpForm} />
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
          component={Test}
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
