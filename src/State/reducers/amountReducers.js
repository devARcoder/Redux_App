export const reducer = (state=0, action)=>{
    if (action.type==='deposit'){
        return state + action.payLoad;
    }
    else if (action.type==='withdraw'){
        return state - action.payLoad;
    }
    else{
        return state;
    }
}