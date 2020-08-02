import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { lazy } from "react-lazy-no-flicker";
//Lazy load the routes
const Sweets = lazy(() => import("./components/Sweets"));

function SweetRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Sweets />
      </Route>
      <Route path={`${path}/:category`}>
        <Sweets />
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/">
            <Sweets />
          </Route>
          <Route path="/sweets">
            <SweetRoutes />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
