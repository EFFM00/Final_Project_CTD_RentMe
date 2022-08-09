import React from 'react'
import Button from '../atoms/Button'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function Menu() {

    const MenuStyle = styled.div`
    display: flex;
    gap: 15px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

  const navigate = useNavigate();

  return (
    <MenuStyle>
        <Button text="Crear cuenta" type="Outline" width="xs" click={() => navigate("/sign-up")}/>
        <Button text="Iniciar sesión" type="Outline" width="xs" />
    </MenuStyle>
  )
}

export default Menu