import React,{useState} from 'react';
import Product from './arr'
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import empty from './empty-cart.png'

import { 
      cartitem,Newcart}
   from '../features/counter/counterSlice';


const Cart = () => {
    const [api, setapi] = useState(Product);
    const citem = useSelector(cartitem);
    const dispatch = useDispatch();

    const del = event => {
      var num = [];
      var v = event.target.dataset.val;
      console.log(citem);
      console.log(v);
      citem.map((e, index, array) => {
        if(index != v){
          num.push(e);
        }
      }
      )
      console.log( num); 
      dispatch(Newcart(num));
      
    } // {mssg: "Hello!"}
// citem.map((value, index, array) => {})
var howmuch = 0;
var money = 0;
    const item = citem.map((e,a)=>{
      const eachOne = api.map(it => {       
        if(it.id == e){
            return <div> <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4">
                <img className="mt-2" src={it.image} style={{height: "18rem",padding:"1.5em"}} alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div className="content"><h3>Product Name : </h3>  <h5 class="card-title ml-2">{it.category}</h5></div>
                  <div className="content"><h3>Description  </h3>  <p class="card-text ml-2">{it.description}</p></div>
                  <div className="content"><h3>Price : </h3>   <p class="card-text ml-2 text-danger"><b>$ {Math.floor(it.price)}</b></p></div>
              <button data-val={a} onClick={del} className="btn-block btn btn-danger">Delete</button>
               </div>
          
              </div>
            </div>
          </div>
          <div className="what"> {money += Math.floor(it.price)}
          {howmuch++}</div>
         
          </div>;
        }

       
    });
    return eachOne;
    })
      
    return (
        <>
        <hr className="w-50 bg-success"></hr>
        <div className="container-fluid cart">
            <div className="row">
                <div className="col-lg-8">
                    <div className="left_side mr-3">
                  {howmuch == 0 ? <img src={empty} className="img-fluid" />  : item }
                  
                    </div>
                </div>    
              <div className="col-lg-4">
                  <div className="right_side py-1 ">
                    <h1 className="px-5">Total Amount</h1>
                    <div className="one px-5">
                      <h2><span>Items: {howmuch}</span> </h2> <br></br>
                    <h2><span>SubTotal  </span> <span className="two text-danger"><br></br>$ {money}</span></h2> 
                    <button className="btn btn-dark mt-1">Processed To BUY!</button>           
                    </div> 
                  </div>
              </div>
            
          </div>
        </div>
        </>
    );
}

export default Cart;
