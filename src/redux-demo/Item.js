import React from 'react'
import { useDispatch } from 'react-redux'

const Item = (props) => {
    const showData = props.data

    const dispatch = useDispatch()

  return (

    <>

    <div class="col">
        <div class="card">
        <img src={showData.itemImage} class="card-img-top" alt="..." style={{height:'300px', width:'fit-content', margin:'auto'}}/>
        <div class="card-body">
            <h5 class="card-title">{showData.itemName}</h5>
            <p>Rs. {showData.itemPrice}/-</p>
            <button className='btn btn-success'
                onClick={()=>dispatch({type:'ADD_ITEM_TO_CART', payload:showData})}
            >Add To Cart</button>
        </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Item