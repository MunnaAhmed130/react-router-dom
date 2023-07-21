import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  // HashRouter,
  // MemoryRouter,
} from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* useful when -
    url should not be send to the server or you don't have full control over the server 
    <HashRouter basename="/app"> */}

    {/* useful for running tests
    works in memory not in browser
    stores location internally, not tied to external source like history stack */}
    {/* <MemoryRouter future={{ v7_startTransition: true }}> */}

    {/* useful when you render your component in server in react 
        only used in server / server side rendering */}
    {/* <StaticRouter location="/"> */}

    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* </StaticRouter> */}

    {/* </MemoryRouter> */}

    {/* </HashRouter> */}
  </React.StrictMode>
);
