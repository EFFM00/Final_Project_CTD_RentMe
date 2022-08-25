import Categoria from './Categoria'
import React, { useState, useEffect } from 'react'

import { getCategories } from '../services/Categories'

function ListaCategorias({categoryData, setCategoryData, clickCat, setClickCat}) {
  const [categorias, setCategorias] = useState([]);
  
  useEffect(() => {
    getCategories({setCategorias})
  }, [])

  setCategoryData(categorias)
  console.log(categoryData, "pls ayuda");

  return (
    <>
        {
            categorias.map(item =>
            <Categoria
                key={item.id}
                image_url={item.imageUrl}
                title={item.title}
                description={item.description}
                categoryData={categoryData}
                setCategoryData={setCategoryData}
                clickCat={clickCat}
                setClickCat={setClickCat} 
            />
            )
        }
    </>
  )
}

export default ListaCategorias