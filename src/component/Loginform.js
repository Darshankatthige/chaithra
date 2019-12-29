
import React, { Component } from 'react';
//import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
// import Panel from 'react-bootstrap'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import app from '../App'
import './loginfm.css'
import axios from "axios";
import { Redirect } from 'react-router-dom'
import '../App'





class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSuccess: false,
      password: null,
      email: null
    };
  }
  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
    try {
      const response = await axios.post('https://reqres.in/api/login', {   "email": this.state.email,
      "password": this.state.password });
      console.log('👉 Returned data:', response);
      this.setState({isSuccess:true})
      
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
      this.setState({isSuccess:false})
    }
    console.log("state",this.state.isSuccess)
   
   
  }
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }
  handleLogin = e => {
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);
    // try {
    //   const response =  axios.post('https://reqres.in/api/login', {   "email": this.state.email,
    //   "password": this.state.password });
    //   console.log('👉 Returned data:', response);
    //   this.setState({isSuccess:true})
      
    // } catch (e) {
    //   console.log(`😱 Axios request failed: ${e}`);
    //   this.setState({isSuccess:false})
    // }
    if(this.state.email === "chaithra@admin.com" && this.state.password === "123"){
     
    }
}

  render() {
    return (
      //     <div className="container">
      //     <form>
      //     <h3>Login</h3>

      //     <div className="form-group">
      //         <label>Email address</label>
      //         <input type="email" className="form-control" placeholder="Enter email" />
      //     </div>

      //     <div className="form-group">
      //         <label>Password</label>
      //         <input type="password" className="form-control" placeholder="Enter password" />
      //     </div>



      //     <button type="submit" className="btn btn-primary btn-block">Submit</button>

      // </form>
      // </div>

      <div class="wrapper fadeInDown">
        <div id="formContent">

          <div class="fadeIn first">
            <center><b>Login</b></center>
          </div>


         
            <input type="number" id="login" class="fadeIn second" name="login" placeholder="login" value={this.state.email} onChange={this.handleEmailChange} />
            <input type="number" id="password" class="fadeIn third" name="login" placeholder="password" autoComplete="off" value={this.state.password} onChange={this.handlePasswordChange} />
            <input type="submit" class="fadeIn fourth" value="Log In" onClick={this.handleLogin} />

         
          <a href="/Signup" >Register</a>



        </div>
      </div>

    );

  }
}

export default LoginForm;