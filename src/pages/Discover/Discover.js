import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import randomDog from "../../utils/API";
import "./style.css";
import TinderButton from "../../components/Button/Button";

class Discover extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newDog: "",
		};
		this.getNewDog = this.getNewDog.bind(this);
	}

	getNewDog = () => {
		randomDog
			.then((response) => {
				this.setState({ newDog: response.data.message });
				// console.log(this.state);
			})
			.catch((error) => console.log(error));
	};

	componentDidMount() {
		this.getNewDog();
	}

	handleClick = (event) => {
		event.preventDefault();
		this.getNewDog();

		// console.log(this.state);
	};

	render() {
		return (
			<Row className="image_position">
				<Col xs={6}>
					<Figure>
						<Figure.Image
							src={this.state.newDog}
							alt="dog image"
							width={678}
							height={499}
						/>
					</Figure>

					<section className="button_position">
						<TinderButton
							variant="danger"
							use="No"
							handleClick={this.handleClick}
						>
							No
						</TinderButton>
						<TinderButton variant="success" use="Yes">
							Yes
						</TinderButton>
					</section>
				</Col>
			</Row>
		);
	}
}

export default Discover;
