import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ButtonAppBar from "./ButtonAppBar1";
import SimpleFormExample from "./LoginPage";
import SignUp from "./SignUp";
import Forgotpassword from "./Forgotpassword";
import { Dashboard } from "./dashboard";
import { AddTicket } from './addTicket';
import { Page } from './ticketpage';
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
          <Route path="/AddTicket" element={<AddTicket/>}/>
          {/* <Route  exact path="/tickets/:tId">
            <Page/>
          </Route > */}
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

