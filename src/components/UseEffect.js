import React, { useState, useEffect } from "react";

const UseEffect = () => {
	useEffect(() => {
		console.log("call useEffect");
	});
	console.log("render component");
    
	return (
		<div>
			<h1>use effect</h1>
		</div>
	);
};

export default UseEffect;
