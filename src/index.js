import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import "./style/global.scss";
const App = lazy(() => import("./components/App"));

ReactDOM.render(
  <ErrorBoundry>
    <Suspense fallback={<div>...loading</div>}>
      <App />
    </Suspense>
  </ErrorBoundry>,
  document.querySelector("#root")
);
