import React from 'react'
import Budget from './components/Budget'
import 'bootstrap/dist/css/bootstrap.min.css'
import Remaining from './components/Remaining'
import Spend from './components/Spend'
import ExpenseList from './components/ExpenseList'
import Addform from './components/Addform'
import { AddBudget } from './components/AddBudget/AddBudget'
import './app.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {

    const [display,setDisplay]=useState(true)

    useEffect ( ()=> { 
        const visibilty=()=>{
            if(localStorage.getItem('budget')){
                setDisplay(false)
            }
        }
        visibilty()
     } , [])
    return (
        <div className='container'>
            { display&&<AddBudget/>}
            <div className={"mainContent "+(display?"active":"")}>
            <h1 >Plan your Budget</h1>
            <div className="content-container">
                <div className="content-section budget">
                    <Budget />
                </div>
                <div className="content-section remain">
                    <Remaining />
                </div>
                <div className="content-section spend">
                    <Spend />
                </div>
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className='row mt-3'>
                <div className="col-sm">
                    <ExpenseList/>
                </div>
            </div>
            <h3 className="addItem" style={{"marginTop":"5vh"}}>Add Item</h3>
            <div className='mt-3'>
                <div className="col-sm">
                    <Addform/>
                </div>
            </div>
        </div>
            </div>
    )
}
