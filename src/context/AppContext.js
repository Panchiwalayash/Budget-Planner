import React, { createContext, useReducer } from 'react';

const AppReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses:[...state.expenses,action.payload]
            }
        case 'REMOVE_EXPENSE':
            return{
                ...state,
                expenses:state.expenses.filter((e)=>e.id!==action.payload)
            }
        
        default:
            return state;
    }
}
const INITIAL_State={
    budget:20000,
    expenses:[
]
}

export const AppContext=createContext();

export const AppProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,INITIAL_State)
    return(
        <AppContext.Provider value={{
            budget:state.budget,
            expenses:state.expenses,
            dispatch
        }}>
{props.children}
        </AppContext.Provider>
    )
}

