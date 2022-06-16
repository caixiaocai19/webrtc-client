import React from 'react';
import { connect } from 'react-redux';
const Count = (props) => {
    return (
        <div>
            <h1>redux中的count:{props.count}</h1>
            <button onClick={props.addOne}>点我加一</button>
        </div>
    );
}

export default connect((store)=>({
    count:store
}),{
    addOne:()=>({type:"increase",data:1})
})(Count);
