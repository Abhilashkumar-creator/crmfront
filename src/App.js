import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ButtonBases from "./ButtonAppBar1";
import ButtonAppBar from "./ButtonAppBar1";
import SimpleFormExample from "./LoginPage";
import useForm from './useForm'
import SignUp from "./SignUp";
import Forgotpassword from "./Forgotpassword";
import { Dashboard } from "./dashboard";
const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ButtonAppBar />} />
          <Route path="/LoginPage" element={<SimpleFormExample/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
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