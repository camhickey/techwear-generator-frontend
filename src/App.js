import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

//components
import Home from "./components/home/Home";
import Urban from "./components/styles/Urban";
import Greyman from "./components/styles/Greyman";
import Cyberpunk from "./components/styles/Cyberpunk";
import Outdoors from "./components/styles/Outdoors";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/urban" component={Urban} />
        <Route exact path="/greyman" component={Greyman} />
        <Route exact path="/cyberpunk" component={Cyberpunk} />
        <Route exact path="/outdoors" component={Outdoors} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
