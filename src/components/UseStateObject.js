import React, { useState } from "react";

const UseStateObject = () => {
	const [person, setPeople] = useState({
		name: "Genthos",
		age: 33,
		message: "Hello, World",
	});
	console.log(person);
	return <h2>useState object example</h2>;
};

export default UseStateObject;
