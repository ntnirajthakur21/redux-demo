import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartControl = () => {
  const dispatch = useDispatch()

  const addItem = ()=>{
    dispatch({type:'ADD_ITEM'})
  }
  const removeItem = ()=>{
    dispatch({type:'REMOVE_ITEM'})
  }

  const data = useSelector(store=>store.cart)
  
  return (
      <>
        <button onClick={addItem} >Add Item</button>
        {(data.cartCount>0) && (<button onClick={removeItem}>Delete Item</button>)}
      </>
  )
}

export default CartControl