import * as ReactDOM from "react-dom";
import App from "./App";

const content: Element = document.createElement("div");
document.body.appendChild(content);
ReactDOM.render(App(), content);
