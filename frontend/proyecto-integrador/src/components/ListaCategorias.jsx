import React from 'react'
import dataCategorias from './dataCategorias.json'
import Categoria from './Categoria'

function ListaCategorias() {
  return (
    <>
        {
            dataCategorias.map(item =>
            <Categoria
                key={item.id}
                image_url={item.image_url}
                title={item.title}
                description={item.description}
            />
            )
        }
    </>
  )
}

export default ListaCategorias