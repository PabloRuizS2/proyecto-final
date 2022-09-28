import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { getDoc, doc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const itemIndex = Number(params.id)

  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const docRef = doc(db, 'products', `${itemIndex}`)
    const product = getDoc(docRef).then(snapshot => snapshot.data())
    product.then(respuesta => {
      setItem(respuesta)
      setLoading(false)
    })
  }, [])

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
      <div className="detail-container">
        <ItemDetail data={item} />
      </div>
    </>
  )
}
export default ItemDetailContainer
