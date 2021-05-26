import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import {Homepage} from './pages/HomePage'
import Header from './component/Header'
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import 
    {
    Loginname}
   from './features/counter/counterSlice';
import  { Redirect,BrowserRouter as Router,
  Switch,
  Route  } from 'react-router-dom'
import HomePage from './pages/Homepage';
import Cart from './component/Cart'




function App() {
  const count = useSelector(Loginname);
  return (
    <div className="App">
       <Router>
      <div>
       
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      </div>
    
      {count ? 
      <Switch>
         <Route  path="/home">
        <HomePage />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      
    </Switch>
     
 : <Switch> 
    <Redirect to="/" ></Redirect>
    
      </Switch>  }

      <Switch> 
          <Route exact path="/">
          <Login />    
          </Route>    
    </Switch> 
</Router>

    </div>
  );
}


export default App