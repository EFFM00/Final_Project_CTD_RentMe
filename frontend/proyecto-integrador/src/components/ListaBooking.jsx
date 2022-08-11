import React from 'react'
import Card from './Card'
import dataBooking from './dataBooking.json'

function ListaBooking() {
  return (
    <>
        {
            dataBooking.map(item =>
            <Card
                key={item.id}
                crimg={item.crimg}
                category={item.category}
                title={item.title}
                location={item.location}
                description={item.description}
            />
            )
        }
    </>
  )
}

export default ListaBooking