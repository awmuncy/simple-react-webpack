var React = require("react");
var ReactDOM = require("react-dom");
import Card from "./card.js";

class TwoRandomCards extends React.Component {
	constructor(props) {
		super(props);

		var card1 = Math.floor(Math.random() * props.cards.length);
		var card2 = Math.floor(Math.random() * props.cards.length);
		while(card1 === card2) {
			card2++;
		}
		this.state = {
			card1: card1,
			card2: card2
		};

	}


	render() {
		return (
			<div class="cards">
				<Card card={this.props.cards[this.state.card1] || 1} />
				<Card card={this.props.cards[this.state.card2] || 2} />
			</div>
		);
	}
}

export default TwoRandomCards;