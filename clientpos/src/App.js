import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <div className="wrapper">
            <Header />
            <Sidebar />
            <Route path="/dashboard" component={Dashboard} />
            <Footer />
          </div>
        </Switch>
      </Router>
    )
}

export default App;





