import React from 'react'
import { ContenedorCard, Imagen, Info } from '../styles/CardStyle'
import Text from './atoms/Text'
import Button from './atoms/Button'
import { useNavigate } from 'react-router-dom'

// import Score from './molecules/Score'

function Card({ id, mainPictureUrl, category, title, address, description }) {
  const navigate = useNavigate();
  return (
      <ContenedorCard>
            <div>
              <Imagen src={mainPictureUrl} alt={title}/>
            </div>
            <Info>
              {/* <Score score={8}/> */}
              <Text type="h4" color='secondary' text={category} style={{opacity:"0.5"}}/>
              <Text type="h1" color='secondary' text={title}/>
              <Text type="p1" color='secondary' text={address}/>
              <Text type="p1" color='secondary' text={description}/>
              <Button click={() => navigate(`/products/${id}`)} text="Ver más"  fullwidth style={{ cursor: "pointer", opacity:"0.7", focus:"background-color: #F5C6AA;"}} />
            </Info>
      </ContenedorCard> 
  )
}

export default Card