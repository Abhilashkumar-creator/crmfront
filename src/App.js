import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import ButtonBases from "./ButtonAppBar1";
import ButtonAppBar from "./ButtonAppBar1";
import Login from "./Login";
import Registration from "./Registration"

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ButtonAppBar" element={<ButtonAppBar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// Kindacode.com
// Just some styling
const styles = {
  app: {
    padding: 50,
  },
};