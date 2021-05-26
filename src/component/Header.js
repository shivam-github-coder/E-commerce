import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import 
    { 
      login,
      Loginname,
      cartvalue,
      removecart}
   from '../features/counter/counterSlice';

import {Link,BrowserRouter as Router,} from "react-router-dom";
import {  Nav } from 'react-bootstrap';

const Header = () => {
  
  const dispatch = useDispatch();
  const count = useSelector(Loginname);
  const cvalue = useSelector(cartvalue);
  let history = useHistory();


  function logout(){
    dispatch(login(""));
    dispatch(removecart());
    history.push("/");
  }
  // <div className="left">
  //   <Router>
  //   <Link to="/Cart"><ShoppingCartIcon style={{ fontSize: 40 }} /><b className="bg-white px-2 rounded-circle">{cvalue}</b></Link>
    
  //     {count ? <> 
  //       <h3 className="text-white">{count}</h3>
  //       <Link to="/"> <button className="btn btn-danger" onClick={logout}>Logout</button> </Link>
  //      </> : 
  //      <h1>😄</h1>
  //      } 
  //      </Router> 
  //   </div>
    return (
        <>
    <div className="left">
      <Link className="Link" to={count ? "/home" : "/"}><h1>E-commerce</h1></Link>
    
     <Nav>
      <Link className="Link" to={count ? "/Cart" : "/"}><ShoppingCartIcon fontSize="large" /><b className="bg-white text-dark px-2 rounded-circle">{cvalue}</b></Link>
    </Nav>
    <Router>
    
      {count ? <> <div className="d-flex ">
        <Avatar fontSize="large" >{count.charAt(0).toUpperCase()}</Avatar> <h3 className="text-white ml-2">  {count}</h3>
      </div>
        
         <Link to="/"> <button className="btn btn-danger" onClick={logout}>Logout</button> </Link>
        </> : 
       <h1><Avatar/></h1>
       } 
       </Router> 
    </div>
   
        </>
    );
}

export default Header;
