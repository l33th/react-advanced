import React, { useState } from "react";
const url = "https://api.github.com/users";

const ConditionalRenderingMultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState("default user");

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (isError) {
		return <h1>Error !!!</h1>;
	}

	return (
		<div>
			<h1>Conditional Rendering</h1>
			<h2>Multiple Returns</h2>
			<h1>{user}</h1>
		</div>
	);
};

export default ConditionalRenderingMultipleReturns;
