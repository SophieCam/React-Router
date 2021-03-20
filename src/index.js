import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Game from './Components/Game'
import './index.css';
// import App from './Components/App';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Square (props) {
     return (
        <button 
        className="square" 
        onClick={props.onClick}>
          {props.value}
        </button>
      );
    
  }
  
  
  
    
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  ReactDOM.render(
    <App/>,
    document.getElementById('nav')
  );
  

 

  