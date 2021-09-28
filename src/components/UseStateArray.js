import React from "react";
import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				console.log(person);
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
					</div>
				);
			})}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
		</>
	);
};

export default UseStateArray;