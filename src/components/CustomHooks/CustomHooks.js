import React from "react";
import useFetchHook from "./useFetchHook";

const url = "https://course-api.com/javascript-store-products";

const CustomHooks = () => {
	const { loading, products } = useFetchHook(url);

	console.log(products);
	return (
		<div>
			<h2>{loading ? "loading..." : "data"}</h2>
		</div>
	);
};

export default CustomHooks;
