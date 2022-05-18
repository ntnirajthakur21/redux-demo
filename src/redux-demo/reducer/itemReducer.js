const initialData = {
    items : [
        {
            itemName:'Redmi Note 8 Pro',
            itemPrice:'27000',
            itemImage:'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/x/i/xiaomi-redmi-note-8-pro-dual-sim-en-azul-de-128gb-y-6gb-ram.jpg'
        },
        {
            itemName:'Redmi Note 9 Pro',
            itemPrice:'29000',
            itemImage:'https://static.digit.in/default/ee594eee7b2d1fa81762babf601677144f6e6a84.jpeg?tr=1200'
        },
        {
            itemName: 'Redmi 8A',
            itemImage: 'https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/redmi_8a_1.jpg',
            itemPrice: '15,000'
        },
        {
            itemName: 'Realme 7 Pro',
            itemImage: 'https://static.digit.in/default/26af91b06c0e70e2de1d0ea6dd5aca991b81bb28.jpeg?tr=n-product_detail_leader_thumb',
            itemPrice: '25,000'
        },
        {
            itemName: 'Samsung Galaxy S20',
            itemImage: 'https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SAMO0187b1',
            itemPrice: '60,000'
    
        },
        {
            itemName: 'Samsung Galaxy S20 Ultra',
            itemImage: 'https://www.dealayo.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-s20ultra-2-nepal_1_1.jpg',
            itemPrice: '1,60,000'
    
        }
    ]
}

function itemReducer(state=initialData, action)
{
    return state
}

export default itemReducer