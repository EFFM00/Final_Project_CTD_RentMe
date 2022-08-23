import Categoria from './Categoria'
import React, { useState, useEffect } from 'react'

import { getCategories } from '../services/Categories'

function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategories({setCategorias})
  }, [])


  return (
    <>
        {
            categorias.map(item =>
            <Categoria
                key={item.id}
                image_url={item.imageUrl}
                title={item.title}
                description={item.description}
            />
            )
        }
    </>
  )
}

export default ListaCategorias