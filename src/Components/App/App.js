import { Key } from './Key.js'
import { Door } from './Door.js'
import './App.css';
import { useState } from 'react';

function App() {

  const [hasKey, updateKey] = useState(false)

  return (
    <div className="EscapeRoom">
        {!hasKey && <Key updateKey={updateKey}/>}
        <br />
        {hasKey && <p>You have the key</p>}
        <Door hasKey={hasKey}/>
    </div>
  );
}

export default App;
