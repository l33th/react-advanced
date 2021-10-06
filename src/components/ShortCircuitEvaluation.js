import React, { useState } from "react";
// short-circuit evaluation
// tertiary operator

const ShortCircuitEvaluation = () => {
	const [text, setText] = useState("");
	const firstValue = text || "hello world";
	const secondValue = text && "hello world";

	return (
		<div>
			<h1>ShortCircuitEvaluation</h1>
			<h2>short circuit</h2>
			{/* <h1>{firstValue}</h1>
			<h2>value: {secondValue}</h2> */}
            <h1>{text || 'developer'}</h1>
            {text && <h1>hello world</h1>}
            {!text && <h1>hello world</h1>}
		</div>
	);
};

export default ShortCircuitEvaluation;
