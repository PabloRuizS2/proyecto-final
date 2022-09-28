import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCard({ name, image }) {
  return (
    <>
      <div className="category-card">
        <div
          className="category-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="category-name">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  )
}

function Categories() {
  const categoriesArray = [
    {
      name: 'electronics',
      id: '1',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg'
    },
    {
      name: 'jewelry',
      id: '2',
      image:
        'https://m.media-amazon.com/images/I/71AtSoXAawL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "men's clothing",
      id: '3',
      image:
        'https://m.media-amazon.com/images/I/712AJrtKVoL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "women's clothing",
      id: '4',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg'
    }
  ]

  return (
    <>
      {categoriesArray.map(category => {
        return (
          <Link key={category.id} to={`/category/${category.id}`}>
            <CategoryCard name={category.name} image={category.image} />
          </Link>
        )
      })}
    </>
  )
}
function CategoriesContainer() {
  return (
    <div className="categories-container">
      <Categories />
    </div>
  )
}
export default CategoriesContainer
