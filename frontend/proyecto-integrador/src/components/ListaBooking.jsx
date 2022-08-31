import React, { useEffect, useState } from 'react'
import { getProducts, getProductsRandom } from '../services/Products';
import Card from './Card'

function ListaBooking({idCat, tipoProducto}) {
  const [ products, setProducts ] = useState([]);
  

  let productosFiltrados = products.filter( prod => prod.category.id === idCat)

  useEffect(() => {
    getProducts({setProducts});
  }, [])

  return (
    <>
        {
            productosFiltrados.map(product =>
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