import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/Products';
import Card from './Card'
// import dataBooking from './dataBooking.json'

function ListaBooking() {
  const [ products, setProducts ] = useState([]);
  

  useEffect(() => {
    getProducts({setProducts});
  })

  return (
    <>
        {
            products.map(product =>
            <Card
                key={product.id}
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