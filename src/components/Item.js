import React from "react";
import { useDispatch } from "react-redux";


function Item({ item }) {
    const dispatch = useDispatch()

    const addCart =()=>{
        dispatch({type: "ADD_CART", payload:item})
    }


  return (
    <div className="shadow p-3 mb-5 bg-body rounded">
      <h6>{item.itemName}</h6>
      <img src={item.itemImage} alt="" className="img-fluid" />
      <h6>{item.itemPrice}</h6>
      <button onClick={addCart} className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default Item;
