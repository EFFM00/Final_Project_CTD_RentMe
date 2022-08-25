import React from 'react'
import { ContenedorCard, Imagen, Info } from '../styles/CardStyle'
import Text from './atoms/Text'
import Button from './atoms/Button'
// import Score from './molecules/Score'

function Card({ crimg, category, title, address, description }) {
  return (
      <ContenedorCard>
            <div>
              <Imagen src={mainPictureUrl} alt={title}/>
            </div>
            <Info>
              {/* <Score score={8}/> */}
              <Text type="h4" color='secondary' text={category}/>
              <Text type="h1" color='secondary' text={title}/>
              <Text type="p1" color='secondary' text={address}/>
              <Text type="p1" color='secondary' text={description}/>
              <Button click={() => navigate(`/products/${id}`)} text="ver más"  fullwidth />
            </Info>
      </ContenedorCard> 
  )
}

export default Card