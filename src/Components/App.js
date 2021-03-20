import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Nav from "./Nav";
import "../index.css"; 

function App (){
    return (
        <BrowserRouter>
        <header>
            <Nav/>
             <Switch>
                <Route exact path="/" component= {Home} />
                <Route path="/about" component= {About} />
                <Route path="/products" component= {Products} />
            </Switch>  
        </header>
        </BrowserRouter>
    );
}

export default App; 