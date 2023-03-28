import { useState } from 'react';


import './App.css';
import userData from './data/data.json';

const App = () => {

  const [state] = useState(userData); 
  const { header,  } = state;
  
  return (
    <div className='wrapper, size-A4'>
      <div className='_header'>
        <Header data={header}/>
      </div> 
    </div>
  );
}

export default App;
