import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import CategoriesContainer from './components/CategoriesContainer'
import CartPage from './components/CartPage'
import CartProvider from './contexts/cartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/react13"
              element={<ItemListContainer />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/categories" element={<CategoriesContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="*"
              element={
                <div className="error404">
                  <h1>Error 404</h1>
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
