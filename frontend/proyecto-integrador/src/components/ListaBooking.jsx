import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/Products';
import Card from './Card'

function ListaBooking() {
  const [ products, setProducts ] = useState([]);
  

  useEffect(() => {
    getProducts({setProducts});
  }, [])

  return (
    <>
        {
            products.map(product =>
            <Card
                key={product.id}
                mainPictureUrl={product.mainPictureUrl}
                category={product.category.title}
                title={product.title}
                address={product.address}
                description={product.description}
                id={product.id}
            />
            )
        }
    </>
  )
}

export default ListaBooking