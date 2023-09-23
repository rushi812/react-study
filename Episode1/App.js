import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "heading1" },
      "I'm a h1 tag!"
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "heading2" },
      "I'm a h2 tag!"
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: "heading1" },
      "I'm a h1 tag!"
    ),
    React.createElement(
      "h2",
      { id: "heading2", key: "heading2" },
      "I'm a h2 tag!"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
