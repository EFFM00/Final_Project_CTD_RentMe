import React from 'react'
import Button from '../../components/atoms/Button'
import Text from '../../components/atoms/Text'

function Home() {
  return (
    <div style={{padding: "100px 10px"}}>
        <h1>Home</h1>
        <Text type="h1" color='primary' text="Hola"/>
        <Button text="fullWidth" type="Outline" fullwidth />
    </div>
  )
}

export default Home