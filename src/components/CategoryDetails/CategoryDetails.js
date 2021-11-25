import React from 'react';



const CategoryDetails = (props) => {
	const {name} = props.product;
	
	return (
		<div>
			<h4>This is Category Details </h4>
			<h3>Selected Product: {name}</h3>
		</div>
	);
};

export default CategoryDetails;
