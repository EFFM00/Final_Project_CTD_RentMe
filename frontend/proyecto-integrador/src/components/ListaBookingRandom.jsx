import React, { useEffect, useState } from 'react'
import { getProductsRandom } from '../services/Products';
import Card from './Card'
// import dataBooking from './dataBooking.json'

function ListaBooking() {
  const [ productsRandom, setProductsRandom ] = useState([]);

  useEffect(() => {
    getProductsRandom({setProductsRandom});
  }, [])

  return (
    <>
        {
            productsRandom.map(product =>
            <Card
                key={product.id}
                mainPictureUrl={product.mainPictureUrl}
                category={product.category.title}
                title={product.title}
                address={product.address}
                description={product.description}
            />
            )
        }
    </>
  )
}

export default ListaBooking