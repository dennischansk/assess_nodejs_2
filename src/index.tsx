import * as React from "react";
import * as ReactDOM from "react-dom";

//import { Hello } from "./components/Hello";
import Phrases from "./components/Phrases";

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Phrases />, container);

