import React from 'react'
import { Contenedor, Item, Menu, MenuItems, StyleCloseIcon, Titulo } from '../styles/HeaderStyle';
import { useState } from "react";
import logo from '../assets/logo-db.svg'
import iconoMenu from '../assets/menú.svg'

function Header() {
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <Contenedor>
        <div>
            <img src={ logo } alt='logo'/>
        </div>
        <div onClick={() => setShowMenu(!showMenu)}>
          <img src={ iconoMenu }/>
        </div>
        <Menu open={showMenu}>
            <StyleCloseIcon onClick={() => setShowMenu(!showMenu)}/>
            <Titulo>Menú</Titulo>
            <MenuItems>
                <Item>Crear cuenta</Item>
                <hr style={{height: "1px", width: "95%", backgroundColor: "#545776", margin: "auto"}}/>
                <Item>Iniciar sesión</Item>
            </MenuItems>
        </Menu>
    </Contenedor>
  )
}

export default Header;