import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <h2>163music</h2>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
