import React from "react";
import ReactDOM  from "react-dom/client";


const root =
	ReactDOM.createRoot(document.getElementById('main'));
const element =
	React.createElement("h1", { id: "title" }, "Welcome to React");
root.render(element);