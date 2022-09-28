import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import { Link } from 'react-router-dom'

function CartContent() {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-content">
      {cartItems.reduce((acc, curr) => {
        return acc + curr.quantity
      }, 0)}
    </div>
  )
}

function CartWidget() {
  const { cartItems } = useContext(CartContext)
  return (
    <Link to="/cart">
      <div className="cart-widget">
        <i className="bi bi-cart3"></i>
        {cartItems.length > 0 && <CartContent />}
      </div>
    </Link>
  )
}
export default CartWidget
