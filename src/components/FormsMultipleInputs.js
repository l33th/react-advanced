import React, { useState } from "react";

const FormsMultipleInputs = () => {
	// const [firstName, setFirstName] = useState("");
	// const [email, setEmail] = useState("");
	// const [age, setAge] = useState("");

	const setup = {
		firstName: "",
		email: "",
		age: "",
	};

	const [person, setPerson] = useState(setup);
	const [people, setPeople] = useState([]);

	const handleChange = (e) => {};

	const handleSubmit = (e) => e.preventDefault();

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={person.firstName}
							placeholder='John Smith'
							onChange={handleChange}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input
							type='text'
							id='email'
							name='email'
							value={person.email}
							placeholder='johnsmith@email.com'
							onChange={handleChange}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='age'>Age : </label>
						<input
							type='text'
							id='age'
							name='age'
							value={person.age}
							placeholder='33'
							onChange={handleChange}
						/>
					</div>
					<button type='submit' onClick={handleSubmit}>
						add person
					</button>
				</form>
				{people.map(({ id, firstName, email }) => {
					return (
						<div className='item' key={id}>
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

export default FormsMultipleInputs;
