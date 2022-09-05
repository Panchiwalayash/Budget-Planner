import React, { useRef } from 'react'
import './addBudget.css'

export const AddBudget = () => {

  const budgetRef=useRef()
  const SaveBudget=()=>{
    if(budgetRef.current.value<1 || isNaN(budgetRef.current.value)){
       alert("please enter valid amount")
    }
    else{

      localStorage.setItem('budget',budgetRef.current.value)
      window.location.reload()
    }
  }

  return (
    <div className='AddBudget'>
        <div className="BudgetSection">
          <div className="set-budget">
            <div className='text'>Enter your Budget for creating expences list</div>
            <div className="input-budget">
              <input type="text" placeholder='Enter Budget' ref={budgetRef} />
              <button onClick={SaveBudget}>Save</button>
            </div>
          </div>
        </div>
    </div>
  )
}
