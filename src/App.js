import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests'

function App() {

  // showing the first type of movie by default
  const [selectedOption, setSelectedOption] = useState(requests.fetchActionMovies)

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />  {/**passing setter function to set the title */}
      <Results selectedOption={selectedOption} /> {/**passing selected value to show a particular type of movie */}
    </div>
  );
}

export default App;
