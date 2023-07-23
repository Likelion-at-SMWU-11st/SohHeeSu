import React from 'react';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import MovieList from './MovieList';

function App() {
  return (
    <>
    <Hello name="Heesoo" color="blue"/>
    <Counter/>
    <MovieList />
    </>
  );
}

export default App;
