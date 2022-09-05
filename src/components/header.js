import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [goToForms, setgoToForms] = React.useState(false);
  if (goToForms){
    return <Navigate to="./form"/>;
  }
  return (
    <div className="Header">
      {
        <nav>
          <button><a href="/">Home</a></button>
          <button onClick={() => {
            setgoToForms(true);
          }}><a href="form">Form</a></button>
        </nav>
      }
    </div>
  );
}

export default Header;
