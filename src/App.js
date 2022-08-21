import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Fred" animal="cat" breed="Mix" />
      <Pet name="Katie" animal="dog" breed="Belgium" />
      <Pet name="Don" animal="fish" breed="Lambari" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
