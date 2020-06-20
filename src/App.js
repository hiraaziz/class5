import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import Countercontext from './Countercontext';

function App() {
  let countState=useState(30)
  return (
    <Countercontext.Provider value={countState}>
    <div className="App">
     <Parent/>
    </div>
    </Countercontext.Provider>
  );
}

export default App;
