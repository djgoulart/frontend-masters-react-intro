import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Fred", animal: "Cat", breed: "Angorá" }),
    React.createElement(Pet, {
      name: "Billy",
      animal: "Dog",
      breed: "Belgium Shepherd",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
