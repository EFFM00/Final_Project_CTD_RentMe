import React from 'react'
import { ContenedorCard, Imagen, Info } from '../styles/CardStyle'
import Text from './atoms/Text'
import Button from './atoms/Button'
import { useNavigate } from 'react-router-dom'
// import Score from './molecules/Score'

function Card({ crimg, category, title, address, description, id }) {
  const navigate = useNavigate();

  return (
     <ContenedorCard>
            <div>
              {/* <Imagen src={crimg} alt={title}/> */}
              <h1>Aqui va una imagen</h1>
            </div>
            <Info>
              {/* <Score score={8}/> */}
              <Text type="h4" color='secondary' text={category}/>
              <Text type="h1" color='secondary' text={title}/>
              <Text type="p1" color='secondary' text={address}/>
              <Text type="p1" color='secondary' text={description}/>
              <Button click={() => navigate(`/producto/${id}`)} text="ver más"  fullwidth />
            </Info>
      </ContenedorCard> 
  )
}

export default Card