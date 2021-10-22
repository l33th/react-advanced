import React from "react";

const Products = ({ image, name, price }) => {
	return (
		<div>
			<article className='product'>
				<h4>{name}</h4>
				<p> {price} </p>
			</article>
		</div>
	);
};

export default Products;
