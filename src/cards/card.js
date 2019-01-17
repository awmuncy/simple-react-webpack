import React from "react";
import ReactDOM from "react-dom";

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				{this.props.name}
			</div>
		);
	}
}

export default Card;