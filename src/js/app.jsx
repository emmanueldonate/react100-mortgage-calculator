import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);

    this.state = {
      balance: '',
      rate: '',
      term: 15,
      payment: '',
  }
  
  this.handleBalance = this.handleBalance.bind(this);
  this.handleRate = this.handleRate.bind(this);
  this.handleTerm = this.handleTerm.bind(this);
  this.handleCalculate = this.handleCalculate.bind(this);

  }

//handleBalance(e) {
  //this.setState({[e.target.name]: e.target.value})
//}

handleBalance(e) {
  this.setState({balance: e.target.value});
  console.log(this.state.balance);
}

handleRate(e) {
  this.setState({rate: e.target.value});
  console.log(this.state.rate);
}

handleTerm(e) {
  this.setState({term: e.target.value});
  console.log(this.state.term);
}


handleCalculate(e) {
  e.preventDefault();


//Calculate mortgage
 let payment;
 let P = (this.state.balance);
 let I = (this.state.rate)/ 100/ 12;
 let N = (this.state.term) * 12;

 payment = monthlyPayment(P, N, I);

function monthlyPayment(p, n, i) {
  return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) -1);
}
    this.setState({payment:payment.toFixed(2)});
    console.log(this.state.handleCalculate);
}




  render() {
    return (
      <div className='container'>
        {/* your JSX goes here */}
      <div>
      <div className="page-header">
        <h3>Mortgage Calculator</h3>
        </div>
        <label>
          Loan Balance:
          <input type="number" name="balance" className="col-md-10" placeholder=" Total Due" value={this.state.balance} onChange={this.handleBalance} />
        </label>
        <label>
          Interest Rate (%):
          <input type="number" name="rate" className="col-md-10" placeholder=" %" value={this.state.rate} onChange={this.handleRate} />
         </label>
         <label>
           Loan Term:
           <select name="term" className="col-md-10" value={this.state.term} onChange={this.handleTerm} >
             <option value="15">Bi-Weekly</option>
             <option value="30">Monthly</option>
            </select>
           </label> 
           <div>
          <button type="submit" name="submit" className="btn btn-primary btn-lg" onClick={this.handleCalculate}>Calculate Payment</button>
          </div>
        </div>
         <div name='output' id='output' className="col-md-10">
           <p>{this.state.payment}</p>
        </div> 
      </div>
    );
  }
}
