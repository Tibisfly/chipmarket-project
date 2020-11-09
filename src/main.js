import React from "react";
import ReactDOM from "react-dom";

import "./style.css"

import App from "./app.js"

const container = document.querySelector("#app");
const component = (<App />);

ReactDOM.render(component, container);