var React = require("react");
var ReactDOM = require("react-dom");



class Card extends React.Component {
	constructor(props) {
		super(props);
		this.flip = this.flip.bind(this);
		this.state = {
			show: true
		}
	}

	flip() {
		this.setState({
			show: false
		});
	}

	render() {
		var flip = this.flip;
		if(!this.state.show) return null;
		return (
			<div className={"card status-" + (this.props.card.status ? "started" : "not-started")} onClick={flip}>
				<div>{this.props.card.title}</div>
				<div>{this.props.card.content}</div>
			</div>
		);
	}
}

export default Card;