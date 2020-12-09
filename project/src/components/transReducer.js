import TransactionContext from "./transContext"

const  TransactionReducer =((state,action)=>{
    switch(action.type){
        case 'AddTransaction': {
            return [action.payload,...state]
        }
        default : 
        return state
    }
})
export default TransactionReducer;