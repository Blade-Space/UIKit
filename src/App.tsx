import { MouseEvent } from 'react';
import './App.css';

import DefaultButton from './UIKit/Buttons/DefaultButton';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <DefaultButton onClick={()=>console.log("some")}>Button</DefaultButton>
    </div>
  );
}

export default App;
