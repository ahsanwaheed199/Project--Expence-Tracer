
import TransactionReducer from './transReducer'
import React,{ createContext, useReducer } from 'react'

 const initialTransaction=[
    {amount:500, type:'cash'},
    {amount:-40, type:'book'},
    {amount:-390, type:'camera'}    
] 
 
 export const TransactionContext=createContext(initialTransaction)

 export const TransactionProvider=({children})=>{

    let [state,dispatch] =useReducer(TransactionReducer,initialTransaction)

    const addTrans=(transObj)=>{
     dispatch({
         type:'AddTransaction',
         payload:{
            amount:transObj.amount,
            type: transObj.type
         }
     })
    }
    return(
        <TransactionContext.Provider value={{
            transaction:state,
            addTrans
        }}>
{children}
        </TransactionContext.Provider>
    )
 }


