import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const allProducts = [
	{ name: 'HP', category: 'Laptop' },
	{ name: 'Microsoft', category: 'Laptop' },
	{ name: 'Apple', category: 'Laptop' },
	{ name: 'One Plus', category: 'Mobile' },
	{ name: 'Apple', category: 'Mobile' },
	{ name: 'Samsung', category: 'Mobile' },
	{ name: 'Canon', category: 'Camera' },
	{ name: 'Nikon', category: 'Camera' },
	{ name: 'Sony', category: 'Camera' },
];
const Categories = () => {
	const [category] = useContext(CategoryContext);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const matchProducts = allProducts.filter(
			(pd) => pd.category.toLowerCase() === category.toLowerCase()
		);
		setProducts(matchProducts);
	}, [category]);
	return (
		<div>
			<h2>This is Categories: {category} </h2>
			{products.map((pd) => (
				<CategoryDetails product={pd}></CategoryDetails>
			))}
		</div>
	);
};

export default Categories;
