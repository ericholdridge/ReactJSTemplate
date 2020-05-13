import React, {useState} from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';

function App() {
  return(
    <Navbar />
  )
}

export default App;

// In order to use multiple components, I need to add react fragment
// or just a div that wraps all of the components.
