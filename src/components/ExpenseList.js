import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList() {

    const { expenses } =useContext(AppContext)
    return (
        <ul className='list-group'>
            {expenses.length===0?"No Expenses":expenses.map((e)=>(
              <ExpenseItem key={e.id} expense={e}/>
            ))}
        </ul>
    )
}
