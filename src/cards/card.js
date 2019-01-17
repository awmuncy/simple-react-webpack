var React = require("react");
var ReactDOM = require("react-dom");



class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	flip() {
		console.log("Uh, okay");
	}

	render() {
		var flip = this.flip;
		return (
			<div className="cards">
				{
					this.props.cards.map(function(item, key) {
						return (
							<div className={"card status-" + (item.status ? "started" : "not-started")} onClick={flip} key={key}>
								<div>{item.title}</div>
								<div>{item.content}</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Card;