import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.js";
import TwoRandomCards from "./twoRandomCards.js";


const allCards = () => {
	return (
		<div className="cards">
			{
				props.cards.map(function(item, key) {
					return (
						<Card card={item} item={key} key={key} />
					);
				})
			}
		</div>
	);
};

const Index = (props) => {
  return (
  	<div className="list-of-cards">
  		<h1>JavaScript Cards!</h1>		
		<TwoRandomCards cards={props.cards} />
  	</div>
  );
};


export default Index;