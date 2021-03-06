import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./app/App";
import store from "./store";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = process.env[ `REACT_APP_API_URL_${ process.env.REACT_APP_ENV_NAME }` ];
axios.defaults.timeout = 20000;

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById( "root" ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
