import React from "react";
import { Button } from "react-bootstrap";

function TinderButton(props) {
	return (
		<Button
			variant={props.variant}
			as="input"
			type="button"
			value={props.use}
			onClick={props.handleClick}
		></Button>
	);
}

export default TinderButton;
