import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from 'sweetalert'

function AddItem() {

    const[itemname, setItemname] = useState('')
    const[itemprice, setItemprice] = useState('')
    const[itemimage, setItemimage] = useState('')

    const dispatch = useDispatch()

    const addCart = ()=>{
       
        let item = {
            itemName: itemname,
            itemPrice: itemprice,
            itemImage: itemimage
        }
        dispatch({type: "ADD_ITEM", payload: item})

        swal("Successfully added item", "You have added an item in the cart", "success")

    }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add Item</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-3 mb-5 bg-body rounded p-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Item Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Item Name"
              value={itemname}
              onChange={(e)=>setItemname(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Item Price
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Item Price"
              value={itemprice}
              onChange={(e)=>setItemprice(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Item Photo
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Image of Item"
              value={itemimage}
              onChange={(e)=>setItemimage(e.target.value)}
            />
          </div>
          <div class="d-grid gap-2">
            <button onClick={addCart} class="btn btn-primary mb-2" type="button">
              ADD ITEM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
