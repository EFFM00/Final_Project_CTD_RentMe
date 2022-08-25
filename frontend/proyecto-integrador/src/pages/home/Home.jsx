import React from 'react'
import Buscador from '../../components/molecules/Buscador'
import ListaBooking from '../../components/ListaBooking'
import ListaCategorias from '../../components/ListaCategorias'
import { ContenedorBooking, ContenedorCategorias, GridBooking, GridCategorias } from '../../styles/MainStyle'
import Text from '../../components/atoms/Text'
import { useState } from 'react'
import ProductsByCategory from '../../components/ProductsByCategory'

function Home() {
  const [categoryData, setCategoryData] = useState([]);
  const [clickCat, setClickCat] = useState(false);

  // const changingView = (param) 

  // const renderizar = () => {    
  //   if(clickCat){
  //     return
  //   } else {
  //     return(
  //     <>
  //       <p>H</p>
  //     </>)
  //   }
  // }

  return (
    <>
      <Buscador/>
      <ContenedorCategorias>
        <Text type="h1" color='secondary' text="Buscar por tipo de alojamiento"/>
        <GridCategorias>
          <ListaCategorias categoryData={categoryData} setCategoryData={setCategoryData} clickCat={clickCat} setClickCat={setClickCat} />
        </GridCategorias>
      </ContenedorCategorias>

      <div>
        <h3>Hola</h3>
        <ProductsByCategory/>
      </div>

        {/* {
          renderizar()
        }            */}

      <ContenedorBooking>
        <Text type="h1" color='black' text="Recomendaciones"/>
        <GridBooking>
          <ListaBooking/>
        </GridBooking>
      </ContenedorBooking>
    </>

  )
}

export default Home