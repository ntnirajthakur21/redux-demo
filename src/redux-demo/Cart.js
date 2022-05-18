import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'

const Cart = () => {
  const cartData = useSelector(store => store.cart)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar/>

      {cartData.cartItems.length > 0 ?
      <table className="table" style={{width:'70%', margin:'auto'}}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        
        <tbody>
          {
            cartData.cartItems.map((item,index)=>(
              <tr key={index}>
                  <th scope='row'>{index}</th>

                  <th><img style={{height:'100px'}} src={item.itemImage} alt={item.itemName} /></th>
                  <th>{item.itemName}</th>
                  <th>{item.itemPrice}</th>
                  <th><button className='btn btn-danger'
                    onClick={()=>dispatch({type:'DELETE_ITEM_FROM_CART', payload:item})}
                  >Delete</button></th>
              </tr>
            ))
          }
        </tbody>
      </table>
      :(<h2 className='text-center'>There are no items in cart</h2>)}

    </>
  )
}

export default Cart