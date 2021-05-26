import React,{useState , useEffect} from 'react';
import {  useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {login} from '../features/counter/counterSlice';
import Product from '../component/arr';

const Login = () => {

    
  const dispatch = useDispatch();
  const [user, setuser] = useState({ name:""  })
  const [pw, setpw] = useState({ pass:""  })

  let history = useHistory();

  useEffect(() => {
    return () => {
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(Product.length = 0 )
          .then(json=> json.map(e => Product.push(e) ))
          .then(console.log(Product))
    }
    
  },[])
   

    const mySubmitHandler = (event) => {
        event.preventDefault();
        dispatch(login(user.name));
        history.push("/home")

      }

    return (
      <>
        <div className="bg-info ht-100 py-5 mt-5">
            <h2 style={{letterSpacing:"1em",fontWeight:"bolder",color:"navy",textDecoration:"underline"}}> 😆 Submit AnyThing 😍</h2>
            <div className="container w-25 mt-5">
            <form onSubmit={mySubmitHandler}>
  <div className="form-group">
    <label >Username</label>
    <input type="text" className="form-control"  onChange={e => setuser({name:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" required />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" onChange={e => setpw({pass:e.target.value})}  className="form-control" id="exampleInputPassword1" required />
  </div>
  
  <button type="submit" className="btn btn-block btn-success">Submit</button>
</form>
            </div>
            
         </div>
         <div className="bg-dark mt-3" >
  <marquee behavior="alternate" scrollamount="10"> <h3 className="" style={{ color:"coral"}}>@ Shivam Kumar 2021 - React-Redux</h3> </marquee>

         </div>
         </>
    );
}

export default Login;
