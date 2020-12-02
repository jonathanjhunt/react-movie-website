//app.js
import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Routing/Home';
import Users from './Components/Routing/Users';
import Contact from './Components/Routing/Contact';
import Notfound from './Components/Routing/Notfound';
import FilmReq from './Components/Routing/FilmRequest';
import 'bootstrap/dist/css/bootstrap.min.css';
import MasterCount from './Components/Routing/MasterCount';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FilmRequest">Movie Search</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users/:id" component={Users} />
          <Route exact path="/FilmRequest" component={MasterCount} />
          <Route path="/contact" component={Contact} exact />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;