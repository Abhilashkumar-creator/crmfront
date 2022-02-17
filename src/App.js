import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { LeadForm } from './components/LeadForm';
import { ViewLead } from './components/ViewLead';
import { Home } from './components/Home';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/form"} component={LeadForm} />
        <Route exact path={'/form/:id'} component={LeadForm} />
        <Route exact path={'/view/:id'} component={ViewLead} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
