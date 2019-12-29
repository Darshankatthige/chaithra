import React, { Component } from 'react';

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      sum:0,
      sub:0,
      mul:0,
      div:0,
      result: 0,
    };
  }
  handlenum1Change = e => {
    this.setState({ num1: Number(e.target.value )});
  }
  handlenum2Change = e => {
    this.setState({ num2: Number(e.target.value) });
  }
  handleLogin = e => {
    console.log("num1: " , this.state.num1);
    console.log("num2: " , this.state.num2);
    const Additon =this.state.num1 + this.state.num;
    let Multiplication = this.state.num1 * this.state.num2;
    let Subtracion = this.state.num1 - this.state.num2;
    let Division = this.state.num1 / this.state.num2;
    let x = this.state.num1 + this.state.num2;
    this.setState({sum: x })
    console.log(this.state.sum);
  
    // this.setState({ sum: this.state.num1+this.state.num2 });
    
  }
  handlenum1Change (evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum2Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num2: Number(evt.target.value) });
  }
  addAction =(event)=> {
    let x = this.state.num1 + this.state.num2
    this.setState({result: x })
    let multi = this.state.num1 * this.state.num2
    this.setState({mul: multi })
    let subs = this.state.num1 - this.state.num2
    this.setState({sub: subs })
    let divs = this.state.num1 / this.state.num2
    this.setState({div: divs })
    
  }
  render() {
    return (
      <div> <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
          aria-selected="true">Inputs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
          aria-selected="false">Additon And Subtracion</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
          aria-selected="false">Multiplication and Division</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      {/* <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">First Number and Second number</span>
  </div>
  <input type="number" aria-label="First name" class="form-control" value={this.state.num1} onChange={this.handlenum1Change} />
  <input type="number" aria-label="Last name" class="form-control" value={this.state.num2} onChange={this.handlenum2Change} />
</div>
            <input type="submit" class="fadeIn fourth" value="Calculate" onClick={this.handleLogin} /> */}
            <form>
        <label>
          Name:
          <input type="number" onChange={this.handlenum1Change} />
          <input type="number"   onChange={this.handlenum2Change}/>
          <input type="button" onClick={this.addAction} value="Add"/>
         
        </label>
      </form>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> Additon:<input type='text' value={this.state.result} readOnly/><br></br>Subtracion:<input type='text' value={this.state.sub} readOnly/></div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> Multiplication:<input type='text' value={this.state.mul} readOnly/><br/> Division:<input type='text' value={this.state.div} readOnly/></div>
    </div> </div>
    );
  }
}

export default DashBoard;
