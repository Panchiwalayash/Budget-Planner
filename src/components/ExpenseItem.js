import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export default function ExpenseItem({expense}) {
	const {dispatch} =useContext(AppContext)

	function clickHandler(){
		
			dispatch({
				type:"REMOVE_EXPENSE",
				payload:expense.id
			})
		
	}
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
			{expense.name}
			<div>
				<span style={{color:"white",backgroundColor:"rgb(9,86,154)",
            borderRadius:"10px",margin:"10px",fontSize:"14px",padding:"5px",fontWeight:"bold"}} >${expense.cost}</span>
				<TiDelete size='1.5em' onClick={clickHandler} />
			</div>
		</li>
  )
}
