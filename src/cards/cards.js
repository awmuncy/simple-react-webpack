import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.js";

const Index = (props) => {
  return (
  	<div className="list-of-cards">
  		<h1>JavaScript Cards!</h1>
  		<Card cards={props.cards} />
  	</div>
  );
};


export default Index;