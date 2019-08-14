/* eslint-disable no-underscore-dangle */
import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import createStore from "./redux/createStore";
import "./plugins/i18n";

const store = createStore();

render(<App store={store} />, document.getElementById("root"));
