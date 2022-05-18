import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Cart from './redux-demo/Cart'
import Main from './redux-demo/Main';

const MyRoutes = () => {
  return (
      <>
      <Router>
          <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/cart' element={<Cart/>} />
          </Routes>
      </Router>
      </>
  )
}

export default MyRoutes