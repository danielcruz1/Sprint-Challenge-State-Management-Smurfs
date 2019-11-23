import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer} from './reducers/smurfReducer';

import "./index.css";
import App from "./components/App";

const store = createStore(smurfReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));

