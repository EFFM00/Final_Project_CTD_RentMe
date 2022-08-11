import React from 'react'
import { Contenedor, IconoMenu } from '../styles/HeaderStyle';
import { useState } from "react";
import logo from '../assets/logo-db.svg';
import iconoMenu from '../assets/menú.svg';
import MenuMobile from './molecules/MenuMobile';
import Menu from './molecules/Menu';

function Header() {
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <Contenedor>
        <div>
            <img src={ logo } alt='logo'/>
        </div>
        <IconoMenu onClick={() => setShowMenu(!showMenu)}>
          <img src={ iconoMenu }/>
        </IconoMenu>
        <Menu/>
        <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu}/>
    </Contenedor>
  )
}

export default Header;