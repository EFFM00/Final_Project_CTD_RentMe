import React from 'react'
import Buscador from '../../components/molecules/Buscador'
import ListaBooking from '../../components/ListaBooking'
import ListaCategorias from '../../components/ListaCategorias'
import { ContenedorBooking, ContenedorCategorias, GridBooking, GridCategorias } from '../../styles/MainStyle'
import Text from '../../components/atoms/Text'
import DetallesProducto from '../../components/DetallesProducto'
function Home() {

  return (
    <>
      <Buscador/>
      <ContenedorCategorias>
        <Text type="h1" color='secondary' text="Buscar por tipo de alojamiento"/>
        <GridCategorias>
          <ListaCategorias/>
        </GridCategorias>
      </ContenedorCategorias>

      <ContenedorBooking>
        <Text type="h1" color='black' text="Recomendaciones"/>
        <GridBooking>
          <ListaBooking/>
         <DetallesProducto/> 
        </GridBooking>
      </ContenedorBooking>
    </>
  )
}

export default Home