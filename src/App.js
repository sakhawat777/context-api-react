import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
// Here createContext
export const CategoryContext = createContext();
function App() {
	const [category, setCategory] = useState(0);

	return (
		// For State Management by ContextApi
		<CategoryContext.Provider value={[category, setCategory]}>
			<Header></Header>
			<Home></Home>
			<Shipment></Shipment>
		</CategoryContext.Provider>
	);
}

export default App;
