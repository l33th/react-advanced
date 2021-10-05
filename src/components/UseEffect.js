import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [value, setValue] = useState(0);
	useEffect(() => {
		console.log("call useEffect");
	});
	console.log("render component");

	return (
		<div>
            <h2>use effect</h2>
			<h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
		</div>
	);
};

export default UseEffect;
