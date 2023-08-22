import React from "react";
import "../CSS/card.css";
import Login from "../assets/Login.png";
const Card = () => {
  return (
    <div>
        <div className="container">
            <div className="imga">
                <img src={Login}></img>
            </div>
            <div className="header">
                <h4>This is my header</h4>
            </div>
            <div className="des">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                sapiente eos recusandae aliquid, quasi nisi est minus ullam aliquam
                soluta?
                </p>
            </div> 
            <input type="submit" value="Go There"></input>
            </div>
    </div>
  );
};

export default Card;
