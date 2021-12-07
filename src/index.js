import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./style/global.scss";
const App = lazy(() => import("./components/App"));

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>An Error occurred</div>}>
      <Suspense fallback={<div> ...loading </div>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
  document.querySelector("#root")
);
