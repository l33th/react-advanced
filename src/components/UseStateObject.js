import React, { useState } from "react";

const UseStateObject = () => {
	const [person, setPeople] = useState({
		name: "Genthos",
		age: 33,
		message: "Hello, World",
	});
	// console.log(person);
	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
		</>
	);
};

export default UseStateObject;
