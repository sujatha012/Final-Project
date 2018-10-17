import React from "react";

const divStyle = {
  margin: 80,
};
const pStyle = {
  

 fontWeight: 50,
};
const h5Style = {
  
  textAlign: 'center'
};
const h1Style = {
  
  textAlign: 'center'
};



const Complete = () => (
  <div style={divStyle}>                                                   
 
    <div className="modal-body">
      <h5 style={h5Style} >Order Complete</h5>
      <hr/>
      <h5>  Thanks for your order. You will recieve confirmation email shortly.</h5>
         <p > Christmas season can results in longer wait times.
         We highly recommend in order to save the spot 
        at your preferred time and date click the link below to Schedule drop off.</p>
      <h1 style={h1Style}>
      <a  href="#" class="tooltip-test calendly-inline-widget" href="https://calendly.com/sabeenzehra" 
      title="Schedule">Schedule</a> </h1>
      <br/>
      <br/>
        </div>
  </div>
)

export default Complete;