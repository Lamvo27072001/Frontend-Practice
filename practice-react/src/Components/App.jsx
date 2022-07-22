import React, {useState} from 'react';
import './App.css';
import Data from './Data';
import List from './List';

function App() {
  
  const handleSubmit = () => {
    setPeople([])
  }

  const [people, setPeople] = useState(Data)
  return ( 
    <div className="App">
      <main>
        <section className="container">
          <h3>{people.length} birthday today</h3>
          <List people={people}/>
          <button onClick={handleSubmit}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
