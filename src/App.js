import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget'
import Remaining from './components/Remaining'
import Spend from './components/Spend'
import ExpenseList from './components/ExpenseList'
import Addform from './components/Addform'


export default function App() {
    return (
        <div className='container'>
            <h1 className="mt-3">Plan your Budget</h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budget />
                </div>
                <div className="col-sm">
                    <Remaining />
                </div>
                <div className="col-sm">
                    <Spend />
                </div>
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className='row mt-3'>
                <div className="col-sm">
                    <ExpenseList/>
                </div>
            </div>
            <h3 className="mt-3">Add Item</h3>
            <div className='mt-3'>
                <div className="col-sm">
                    <Addform/>
                </div>
            </div>
        </div>
    )
}
