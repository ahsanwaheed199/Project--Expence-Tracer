import React, { useContext,useState } from 'react'
import {TransactionContext} from './transContext'

function Child() {
    let {transaction,addTrans}=useContext(TransactionContext)
   let [Type, setType] = useState('')
   let [Amount, setAmount] = useState(0)

   
const handleSubmition= (e)=>{
            e.preventDefault()
            if(Number(Amount)===0){
                alert('enter correct amount, make sure your amount is not equal to zero')
                return
            }
            console.log(Type,Amount)
            addTrans({
                amount:Number(Amount),
                type:Type
            })
            setAmount(0)
            setType('')
       }
       const getIncome=()=>{
           let income=0;
           for(var i=0; i < transaction.length; i++){
           if(transaction[i].amount >0){
               income +=transaction[i].amount
           }
        }
        return income
       }
       const getExpence=()=>{
        let expence=0;
        for(var i=0; i < transaction.length; i++){
        if(transaction[i].amount <0){
            expence +=transaction[i].amount
        }
     }
     return expence
    }
    return (
 <div>
            <h1>Expence Tracker</h1>
            <h3>Your Balance</h3>
    <h3>${getIncome() + getExpence()}</h3>
            <div className='space-bet'>
    <h3>INCOME <br/>  ${getIncome()}</h3>
    <h3>  EXPENCE <br/> ${getExpence()}</h3>
            </div>
            <h3>History </h3>
            <hr></hr>
            <ul className='list-control'>
                {transaction.map((transType,index)=>{
                    return <li key={index}>
                    <span>{transType.type}</span>
                <span>{transType.amount}</span>
                </li>
                })}
                
            </ul>
            <h3>Add New Transactions</h3>
            <hr></hr>
            <form className='form-control' onSubmit={handleSubmition}>
                <label>
                    Enter Description
                    <br/>
                    <input value={Type} onChange={(e)=>setType(e.target.value)} required type='text' placeholder='Enter your items'/>
                </label> <br></br>
                <label>
                    Add Amount
                    <br/>
                    <input  value={Amount} onChange={(e)=>setAmount(e.target.value)} required type='text' placeholder=' expence write with - sign'/>
                </label>
                <button>Submit</button>

            </form>
   </div>
        
    )
}

export default Child
