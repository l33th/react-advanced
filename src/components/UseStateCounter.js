import React, { useState } from "react";

const UseStateCounter = () => {
	const initalCount = 0;
	const [value, setValue] = useState(initalCount);
	
	const iCounter = () => {
		setValue(prevState => prevState + 1);
	}

	const dCounter = () => {
		setValue(prevState => prevState - 1);
	}

	const reset = () => {
		setValue(initalCount);
	};

	// const complexIncrease = () => {
	// 	// setValue(value + 1);
	// 	setTimeout(() => {
	// 		setValue((prevState) => {
	// 			return prevState + 1;
	// 		});
	// 	}, 2000);
	// };

	const complexIncreaseCustom = () => {
		// setValue(value + 1);
		setTimeout(() => {
			setValue(prevState =>  prevState + 1)
		}, 2000);
	};

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={iCounter}>
					increase
				</button>
				<button className='btn' onClick={dCounter}>
					decrease
				</button>
				<button className='btn' onClick={reset}>
					reset
				</button>
			</section>

			<section style={{ margin: "4rem 0" }}>
				<h2>more complex counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={complexIncreaseCustom}>
					increase later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
