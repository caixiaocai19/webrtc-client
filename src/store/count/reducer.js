let initState=0;
export  function countReducer(preState=initState,action){
    const {type,data}=action;
    switch (type) {
        case "increase":
            return data+preState;
        default:
            return preState;
    }
}