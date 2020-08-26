import React from 'react';
import logo from './Utils/img/tulalogo.png';
import './App.scss';
import MainNavBar from './Components/MainNavBar/MainNavBar';
import MainNav from './Components/Nav/MainNav';

function App() {
  return (
    <div>
      <MainNav />
      <MainNavBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Seguinos en nuestro <a href='https://www.instagram.com/tulahandmade/' target='_blank'> Instagram</a>! <br />
           
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </div>
  );
}

export default App;
