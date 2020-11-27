import React from "react";
import ReactDOM from "react-dom";
import Editor from "./lib";

ReactDOM.render(
  <Editor initialContent="<p>hello</p>" />,
  document.getElementById("root")
);
