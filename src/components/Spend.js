import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spend = () => {
	const { expenses,budget } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
    

			return (total += item.cost);
	
	}, 0);

	return (
		<div >
			<span>Spent: ${total}</span>
		</div>
	);
};

export default Spend;