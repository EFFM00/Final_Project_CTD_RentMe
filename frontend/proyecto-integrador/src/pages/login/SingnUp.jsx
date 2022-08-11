// Esta es la hoja de Crear cuenta

import React from 'react'
import Text from '../../components/atoms/Text'
import Button from '../../components/atoms/Button'

function SingnUp() {
  return (
    <div style={{padding: "100px 10px"}}>
        <Text type="h1" color='primary' text="Heading 1"/>

        <form>Formulario</form>

        <Button text={<Text type="h3" color='white' text="Crear cuenta"/>}  fullwidth />


    
    </div>
  )
}

export default SingnUp