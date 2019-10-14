import React from 'react';
import './App.css';
import Contact from './conponents/Contact';

const alice = {
  name: 'Alice Mc Donald',
  url: 'https://randomuser.me/api/portraits/women/51.jpg',
  status: true,
}

const ethel = {
  name: 'Ethel Kelley',
  url: 'https://randomuser.me/api/portraits/women/61.jpg',
  status: false,
}

const charlene = {
  name: 'Charlene Hawkins',
  url: 'https://randomuser.me/api/portraits/women/8.jpg',
  status: true,
}

function App() {
  return (
    <div className="App">
      <Contact {...alice} />
      <Contact {...charlene} />
      <Contact {...ethel} />
    </div>
  );
}

export default App;
