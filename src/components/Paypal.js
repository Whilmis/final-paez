import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Paypal() {
  
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: 21.8
          }
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
 
  return (
    <center>
      <div className="App">
         <h4>Derecho a cupo </h4>
       
        <br />
        
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
     
       
      </div>
         
    </center>
  );
}
