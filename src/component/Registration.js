import React, { Component } from 'react';
import './loginfm.css'

class Registration extends Component {
  render() {
    return (
        <div class="wrapper fadeInDown">
        <div id="formContent">
         
          <div class="fadeIn first">
          <center><b>Registration</b></center>
          </div>
      
         
          <form>
            <input type="text" id="name" class="fadeIn second" name="name" placeholder="name" />
            <input type="text" id="phone" class="fadeIn second" name="PhoneNumber" placeholder="Phone Number" />
            <input type="text" id="email" class="fadeIn second" name="email" placeholder="email" />
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" autoComplete="off" />
            <input type="submit" class="fadeIn fourth" value="Log In"/>
          </form>
      
        
      
        </div>
      </div>
    );
  }
}

export default Registration;
