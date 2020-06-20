import React,{useContext} from 'react';
import Countercontext from './Countercontext';

const Child = () =>
{
    let counterValue=useContext(Countercontext)
    console.log(counterValue);
    return(
        <div>
        <h1>This is child component {counterValue[0]} </h1>
        <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
}
export default Child;