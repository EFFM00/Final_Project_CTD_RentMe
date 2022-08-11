import React from 'react'
import Button from '../atoms/Button'
import styled from "styled-components";

function Menu() {

    const MenuStyle = styled.div`
    display: flex;
    gap: 15px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`


  return (
    <MenuStyle>
        <Button text="Crear cuenta" type="Outline" width="xs" />
        <Button text="Iniciar sesión" type="Outline" width="xs" />
    </MenuStyle>
  )
}

export default Menu