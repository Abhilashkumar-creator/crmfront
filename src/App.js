import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import ButtonBases from "./ButtonAppBar1";
import ButtonAppBar from "./ButtonAppBar1";
import Login from "./Login";
import Registration from "./Registration"
import Login2 from "./Login2"
import { Signinpage } from "./Signinpage";
import SimpleFormExample from "./SimpleFormExample";
import useForm from './useForm'

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
          <Route path="/Login2" element={<Login2/>} />
          <Route path="/SimpleFormExample" element={<SimpleFormExample/>} />
                   </Routes>
      </Router>
      
      
         </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};