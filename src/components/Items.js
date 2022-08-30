import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function Items() {

    const[searchkey, setSearchkey] = useState('')

    const itemsObj = useSelector(store =>store.itemsReducer)
    // const itemsList = itemsObj.items
    const [itemsList, setItemsList] = useState(itemsObj.items)

    
    const filterItems = ()=>{
        // Create duplicate list
        // alert(searchkey);
        const duplicateList = itemsObj.items
        const filteredList = duplicateList.filter(item=>item.itemName.toLowerCase().includes(searchkey.toLowerCase()))
        setItemsList(filteredList)
    }

    const itemsData = itemsList.map((item)=>{
        return (
            <div className='col-md-4 col-sm-6'>
                <Item item = {item}/>
            </div>
        )
    })

  return (
    <div className='container'>
        <h3 className='mt-4'>Total items = {itemsObj.items.length}</h3>
        <input type='text' placeholder='Search items' className='form-control mb-5 mt-3' 
        value={searchkey} onChange = {(e)=>setSearchkey(e.target.value)}
        onKeyUp={filterItems}
        />
        <div className='row'>
         {itemsData}
        </div>
    </div>
  )
}

export default Items