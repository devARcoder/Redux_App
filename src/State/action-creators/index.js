export const depositMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payLoad: amount,
        })
    }
}
export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payLoad: amount,
        })
    }
}