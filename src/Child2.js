import React, {useReducer} from 'react'
import reducer from './CountReducer';
import reducer1 from './counter';

const Child2 =()=> {

    let[state, dispatch] = useReducer(reducer,0);
    let[state1, dispatch1] = useReducer(reducer1,0);
   
    return(
        <div>
            <h1>Value of state : {state}</h1>
            <button onClick={()=> dispatch('Increment')}>Increment</button>
            <button onClick={()=> dispatch('Decrement')}>Decrement</button>
            <br></br>
            <h1>Click on second button it will make second increment button functional</h1>
            <button onClick={()=> dispatch1('clicked')}>Second</button>
            <button onClick ={()=> dispatch(state1)}>direct</button>
        </div>
    )
}
export default Child2 
