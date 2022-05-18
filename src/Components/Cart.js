import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const data = useSelector(store=>store.cart)
  return (

    <>
      <h2>I am from cart controller</h2>
      <p>Total items in cart is {data.cartCount}</p>

      </>
  )
}

export default Cart