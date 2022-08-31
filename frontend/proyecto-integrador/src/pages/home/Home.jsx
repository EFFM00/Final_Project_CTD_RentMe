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
  const [titleCat, setTitleCat] = useState("");
  const [idCat, setIdCat] = useState("");
  // const []
  
  const renderizar = () => {    
    if(clickCat){
      console.log(idCat, titleCat);
      // return <ProductsByCategory idCat={idCat} />
      return <ListaBooking idCat={idCat} />
    }
  }

  return (
    <>
      <Buscador/>
      <ContenedorCategorias>
        <Text type="h1" color='secondary' text="Buscar por tipo de alojamiento"/>
        <GridCategorias>
          <ListaCategorias categoryData={categoryData} setCategoryData={setCategoryData} clickCat={clickCat} setClickCat={setClickCat} setTitleCat={setTitleCat} setIdCat={setIdCat}/>
        </GridCategorias>
      </ContenedorCategorias>

      <div>
          <h3>{titleCat}</h3>
        {
          renderizar()
        }
      </div>


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