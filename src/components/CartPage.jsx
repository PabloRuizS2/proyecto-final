import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/cartContext'
import { IoIosClose } from 'react-icons/io'
import { RiDeleteBin2Line } from 'react-icons/ri'

function YourOrder() {
  const { lastOrderId } = useContext(CartContext)
  return (
    <>
      <div className="your-order">
        <p className="processed">Su orden ha sido procesada</p>
        <p className="willBe">Sera enviado dentro de las 24 horas</p>
        <p className="yourId">Su orden ID es: {lastOrderId}</p>
      </div>
    </>
  )
}

function CartPage() {
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [orderFinished, setFinishedOrder] = useState(false)

  const {
    cartItems,
    removeProduct,
    clearCart,
    sendOrder,
    getOrders,
    handleSubmit,
    updateStock,
    lastOrderId
  } = useContext(CartContext)

  return (
    <>
      <div className="greeting">Cart</div>
      <div className="cart-container">
        {orderFinished ? (
          <YourOrder />
        ) : cartItems.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio por unidad</th>
                  <th>Precio total</th>
                  <th>Borrar</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ id, title, image, price, quantity }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <div className="productTd">
                          {title}
                          <img src={image} alt={title} />
                        </div>
                      </td>
                      <td>{quantity}</td>
                      <td>${price}</td>
                      <td>
                        <span> ${price * quantity}</span>
                      </td>
                      <td>
                        <button
                          className="remove-item"
                          onClick={() => removeProduct(id)}
                        >
                          <IoIosClose />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              {cartItems.length > 1 && (
                <tfoot>
                  <tr>
                    <td colSpan="3">Total</td>
                    <td>
                      $
                      {cartItems.reduce((acc, curr) => {
                        return acc + curr.price * curr.quantity
                      }, 0)}
                    </td>
                    <td>
                      <button
                        onClick={() => clearCart()}
                        className="empty-cart-btn"
                      >
                        <RiDeleteBin2Line />
                      </button>
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
            <div className="form">
              <h2>Complete the form to submit your order</h2>
              <form onSubmit={handleSubmit} action="">
                <div className="inputRow">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    value={userForm.name}
                    name="name"
                    id="name"
                    onChange={e =>
                      setUserForm({ ...userForm, name: e.target.value })
                    }
                  />
                </div>
                <div className="inputRow">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    value={userForm.email}
                    name="email"
                    id="email"
                    onChange={e =>
                      setUserForm({ ...userForm, email: e.target.value })
                    }
                  />
                </div>

                <div className="inputRow">
                  <label htmlFor="phone">Celular:</label>
                  <input
                    type="tel"
                    value={userForm.phone}
                    name="phone"
                    id="phone"
                    onChange={e =>
                      setUserForm({ ...userForm, phone: e.target.value })
                    }
                  />
                </div>
              </form>
              {userForm.name && userForm.email && userForm.phone && (
                <div className="add-to-cart">
                  <button
                    onClick={() => {
                      sendOrder(userForm)
                      updateStock(cartItems)
                      clearCart()
                      setFinishedOrder(true)
                    }}
                  >
                    <span className="button_top">Finalizar orden</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="empty-msg">El carrito esta vacio</div>

            <Link to="/">
              <button className="shopping-btn">Volver a la tienda</button>
            </Link>

            {/* testing (para ver en consola las órdenes que hay almacenadas en firestore) */}
            <div>
              <button className="logOrders" onClick={() => getOrders()}>
                Log orders in console (for testing)
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartPage
