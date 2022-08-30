import React from "react";
import { useDispatch, useSelector } from "react-redux";


function Cart() {
  const cartObj = useSelector((store) => store.cartReducer);
  const cartList = cartObj.cartitems;

  const dispatch = useDispatch()

 

//   let total = 0

//   cartList.forEach((go)=>{
//     total += go.itemPrice
//   })
//   console.log(total);


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table class="table table-responsive  table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Price</th>
                <th scope="col">Action</th>
              </tr>
              
            </thead>

            {cartList.map((cart) => {
                
              return (
                <tbody>
                  <tr>
                    <th scope="row">
                        1
                    </th>
                    <td><img src= {cart.itemImage} alt="" width={100} height={100}/></td>
                    <td>{cart.itemName}</td>
                    <td>{cart.itemPrice}</td>
                    <td>
                      <button onClick={()=>dispatch({type: "DELETE_CART", payload: cart})} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
