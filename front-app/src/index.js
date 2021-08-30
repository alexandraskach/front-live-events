import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Route } from "react-router-dom";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducer.js";
import { ConnectedRouter } from "connected-react-router";
import thunkMiddleWare from "redux-thunk";
import { compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokenMiddleware } from "./middleware.js";

const history = createBrowserHistory();

export default function configureStore(state) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    state,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleWare,
        tokenMiddleware
      )
    )
  );

  return store;
}
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
