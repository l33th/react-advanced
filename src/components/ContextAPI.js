import React, { useState, useContext } from "react";
import { data } from "../data";

const PersonContext = React.createContext();

const ContextAPI = () => {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};

	return (
		<PersonContext.Provider value='hello'>
			<h3>Prop Drilling</h3>
			<List people={people} removePerson={removePerson} />
		</PersonContext.Provider>
	);
};

const List = ({ people, removePerson }) => {
	return (
		<>
			{people.map((person) => {
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePerson={removePerson}
					/>
				);
			})}
		</>
	);
};

const SinglePerson = ({ id, name, removePerson }) => {
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button className='btn' onClick={() => removePerson(id)}>
				remove
			</button>
		</div>
	);
};

export default ContextAPI;
