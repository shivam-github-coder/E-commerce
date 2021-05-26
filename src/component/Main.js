import React,{useState} from 'react';
import Product from './arr'
import {  useDispatch,useSelector } from 'react-redux';
import {addcart,Loginname} from '../features/counter/counterSlice';
import './Main.css';

const Main = () => {
    const [api, setapi] = useState(Product);
    const dispatch = useDispatch();

    function truncate(str,n){
      return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }

    const item = api.map(e=>(
      <div className="col-lg-3 my-3">
        <div key={e.id} className="card ml-5" style={{width: "18rem",height:"30rem"}}>
            
         <img src={e.image} className="card-img-top" style={{height: "12rem",padding:"1.5em"}} alt="..." /> 
           <div className="card-body">
          <h5 className="card-title">{e.category}</h5>
          <p className="card-text des">{truncate(e?.description , 120)}</p>
          <h4 className="d-flex justify-content-center">$ <p className="card-text mx-2 text-danger">{Math.floor(e.price)}</p></h4>
          <a href="#" onClick={() => dispatch(addcart(e.id))} className="btn btn-danger mt-2">Add to Basket</a>
        </div>
      </div>
      </div>
    ))

    
   
    
    return (
    <>
    <div className="container-fluid items">
        <div className="row ">
   {item }
   

        </div>
</div>
    
            
        </>
    );
}

export default Main;
