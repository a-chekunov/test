import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/General/Home"
import Popular from "./components/Popular"
import Battle from "./components/Battle"
import Nav from "./components/General/Nav"
import Results from "./components/Battle/Results";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/popular" element={<Popular />} />
          <Route exact path="/battle" element={<Battle />} />
          <Route exact path="/battle/results" element={<Results />} />
          <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
        </div>
    </Router>
  )
}

export default App;
