import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import withAuthinticate from "./components/authentication/withAuthinticate.js";

import Login from "./components/Login/Login.js";

const LoadPage = withAuthinticate(App)(Login);

ReactDOM.render(<LoadPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
