import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-purple-300'>
          Juliana's website
        </p>
        <a
          className="underline text-sm"
          href="https://linkedin.com/in/juliana-spitzner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
