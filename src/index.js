import React from "react";
import ReactDOM from "react-dom";
import Card from "./cards/card.js";

const Index = () => {
  return (
  	<div className="list-of-cards">
  		<h1>JavaScript Cards!</h1>
  		<Card name="I have a name" />
  	</div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));