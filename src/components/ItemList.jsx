import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt={`${title}`} />
      </div>
      <div className="product-card-body">
        <div className="product-card-price">
          <p>{price}</p>
        </div>
        <div className="product-card-title">
          <h3>{title}</h3>
        </div>
        <button className="buy-btn">Comprar</button>
      </div>
    </div>
  )
}

function ItemList(props) {
  const productsArray = props.data
  return (
    <>
      {productsArray.map(product => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </Link>
        )
      })}
    </>
  )
}

export default ItemList
