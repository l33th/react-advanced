import { useState, useEffect } from "react";

const url = 'https://course-api.com/javascript-store-products'

const CustomHooks = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch(url);
		const products = await response.json();
		setProducts(products);
		setLoading(false);
	};

	useEffect(() => {
		getProducts();
	}, []);
	console.log(products);
	return (
		<div>
			<h2>{loading ? "loading..." : "data"}</h2>
		</div>
	);
};

export default CustomHooks;
