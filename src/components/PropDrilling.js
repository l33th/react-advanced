import React, { useState } from "react";
import { data } from "../data";

const PropDrilling = () => {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	return (
		<section>
			<h3>Prop Drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				return <SinglePerson key={person.id} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	return (
		<div className='item'>
			<h4>single item</h4>
		</div>
	);
};

export default PropDrilling;
