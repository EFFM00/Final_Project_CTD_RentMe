import React, { useEffect, useState } from 'react'
import { getProducts, getProductsRandom } from '../services/Products';
import Card from './Card'

function ListaBooking({idCat, tipoProd, dataFilterProd}) {
  const [ products, setProducts ] = useState([]);
  const [ productsRandom, setProductsRandom ] = useState([]);
  //const [ productsFiltrados, setProductsFiltrados ] = useState([]);
  

  let productosFiltrados = products.filter( prod => prod.category.id === idCat)

  useEffect(() => {
    getProducts({setProducts});
  }, [])

  useEffect(() => {
    getProductsRandom({setProductsRandom});
  }, [])


  const tipoProdRenderizar = (tipo) => {
    if(tipo === "productosFiltrados") {
      return productosFiltrados;
    } else if(tipo === "productsRandom") {
      return productsRandom
    } else if(tipo==="productsDateCity") {
      return dataFilterProd;
    }
  }


  return (
    <>
        {
            tipoProdRenderizar(tipoProd).map(product =>
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