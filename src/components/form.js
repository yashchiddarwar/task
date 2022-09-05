import React from "react";
import ReactDOM from "react-dom/client";

function Form() {
  return (
    <div className="Form">
      <p>Enter userId</p>
      <input type="number" id="userID"></input>
      <p>Enter Id</p>
      <input type="number" id="ID"></input>
      <p>Enter Title</p>
      <input type="text" id="Title"></input>
      <p>Enter Body</p>
      <input type="text" id="Body"></input>
    </div>
  );
}

export default Form;