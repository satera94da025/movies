import React from 'react';
import './App.css';
import {Accordion} from "./Accordion";
import {MoviesList} from "./MoviesList";

function App() {
  return (
    <div className="App">
      <Accordion/>
      <MoviesList/>
    </div>
  );
}

export default App;
