import React from 'react';
import './App.css'

class App extends React.Component{
     constructor(){
          super();
          this.state={
               eligibleamt:0,
               monthperiod:0,
               inrrate:0,
               calculate:0,
          }
     }
     handlechange=(e)=>{
          const {name,value}=e.target
          this.setState({
               [name]:value
          })
     }
      //-------EMI coding formula------
        // r = r / (12 * 100); // one month interest
        // t = t * 12; // one month period
        // emi = (p * r * pow(1 + r, t)) / (pow(1 + r, t) - 1);
     getoutput=()=>{
          const { eligibleamt, monthperiod, inrrate } = this.state;
          let r = inrrate/(12 * 100);
          let t = monthperiod;
          let final = (eligibleamt*r*Math.pow(1+r,t)/(Math.pow(1+r,t)-1))
          let finalOut = final.toFixed(0);
  
          this.setState({
               calculate:finalOut,
          })
     }
render(){
     const {eligibleamt,monthperiod,inrrate,calculate} = this.state;
     return(
          <div>
               <div className='card-main'>
                    <div className="maincontentcalc">
                         <h1>EMI calculator</h1>
                         <label style={{fontSize:'20px'}}>eligible amount:</label><br /><br />
                         <input type="number" value={eligibleamt} placeholder='eligible amount'/><br /><br />
                         <input className='rangedsgn' type='range' name="eligibleamt" min='0' max='300000' step='5000' onChange={this.handlechange}/><br /><br />
                         <label style={{fontSize:'20px'}}>month duration:</label><br /><br />
                         <input type="number" value={monthperiod} placeholder='duration'/><br /><br />
                         <input className='rangedsgn' type='range' name="monthperiod" min='0' max='60' onChange={this.handlechange}/><br /><br />
                         <label style={{fontSize:'20px'}}>interest rate(%)</label><br /><br />
                         <input type="number" value={inrrate} placeholder='duration'/><br /><br />
                         <input className='rangedsgn' type='range' name="inrrate" min='0' max='14' step='0.25' onChange={this.handlechange}/><br /><br />
                         <button onClick={this.getoutput}>calculate</button>
                         <h3>{calculate}</h3>
                     </div>
               </div>
          </div>
     )
}
}
export default App;