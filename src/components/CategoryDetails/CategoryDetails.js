import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const CategoryDetails = () => {
	const category = useContext(CategoryContext);
	
	return (
		<div>
			<h4>This is Category Details </h4>
			<h3>Selected Category: {category}</h3>
		</div>
	);
};

export default CategoryDetails;
