import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Cards(props) {
	return (
		<Row xs={1} md={2} className="g-4">
			{Array.from({ length: 10 }).map((_, idx) => (
				<Col>
					<Card key={idx}>
						<Card.Img variant="top" src={props.headShot} />
						<Card.Body>
							<Card.Title>{props.name}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Cards;
