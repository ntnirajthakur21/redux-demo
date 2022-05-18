import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const Items = () => {

    const itemData = useSelector(store => store.items)
    const [itemList, setItemList] = useState(itemData.items)
    const [search, setSearch] = useState('')

    const filterItems = ()=>{
        const allData = itemData.items
        const filterData = allData.filter(item=>item.itemName.toLowerCase().includes(search.toLowerCase()))
        setItemList(filterData)
    }

  return (
      <>

        

        <div className='container mt-3 mb-3'>

            <form className="d-flex col-md-8 mb-3 mt-3 mx-auto">
                <input 
                    onChange={e=>setSearch(e.target.value)}
                    onKeyUp={filterItems}
                
                    className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                
            </form>


            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    itemList.map((item,index)=>(
                        <Item key={index} data={item} />
                    ))
                }
            </div>
        </div>
      
      
      </>
  )
}

export default Items