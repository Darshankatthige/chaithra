import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFrom from './component/Loginform'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registration from './component/Loginform'
import dashboard from './component/DashBoard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashBoard from './component/DashBoard';
import Registration from './component/Registration';

function App() {
  return (
    <div className="App">
      
     <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/LoginFrom">Login</Link>
          </li>
          <li>
            <Link to="/Signup">SignUp</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr /> */}
       <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h2 class="display-4">Internship Project</h2>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <Link to="/LoginFrom">Login</Link>&nbsp;&nbsp;
    <Link to="/Signup">SignUp</Link>&nbsp;&nbsp;
    <Link to="/dashboard">Dashboard</Link>

  </div>
</div>
        
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/LoginFrom">
            <LoginFrom />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
          <Route exact path="/Signup">
            <Registration />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
