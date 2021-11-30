import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import randomDog from "../../utils/API";
import "./style.css";
import TinderButton from "../../components/Button/Button";

class MeetingWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = "";
		// console.log(this.state.newDog);
	}

	componentDidMount() {
		randomDog
			.then((response) => {
				this.setState({
					newDog: response.data.message,
				});
				console.log(this.state);
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<Figure>
				<Figure.Image
					src={this.state.newDog}
					alt="dog image"
					width={678}
					height={499}
				/>
			</Figure>
		);
	}
}

function Discover() {
	// const [dog, setDog] = React.useState(null);

	// React.useEffect((data) => {
	// 	randomDog.get(data).then((response) => {
	// 		setDog(response.data);
	// 	});
	// }, []);

	// console.log(dog.message);

	return (
		<Row className="image_position">
			<Col xs={6}>
				<TinderButton variant="danger" use="No"></TinderButton>
				<MeetingWindow />
				<TinderButton variant="success" use="Yes"></TinderButton>
			</Col>
		</Row>
	);
}

export default Discover;
