import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

function ItemListContainer(props) {
  const { categoryId } = useParams(),
    [items, setItems] = useState([]),
    [loading, setLoading] = useState(false),
    categories = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing"
    ],
    selectedCategory = categories[categoryId - 1]

  useEffect(() => {
    setLoading(true)

    const db = getFirestore()
    const itemsCollection = collection(db, 'products')
    let promiseItems
    categoryId
      ? (promiseItems = getDocs(
          query(itemsCollection, where('category', '==', `${selectedCategory}`))
        ))
      : (promiseItems = getDocs(itemsCollection))

    promiseItems
      .then(snapshot => {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      })
      .then(res => {
        setItems(res)
        setLoading(false)
      })
  }, [categoryId])

  if (loading) {
    return (
      <>
        <div className="detail-container" style={{ height: '100vh' }}>
          <Loader />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="greeting">Bienvenidos a CLC </div>
      <div className="cards-container">
        <ItemList data={items} />
      </div>
    </>
  )
}

export default ItemListContainer
