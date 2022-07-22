import React, {useState} from 'react';
import './App.css';
import List from './List';

function App() {
  const handleSubmit = () => {
    console.log("Click  ")
  }
  return ( 
    <div className="App">
      <main>
        <section className="container">
          <h3>0 birthday today</h3>
          <List />
          <button onClick={handleSubmit}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
