import React from 'react'
import { Contenedor, IconoMenu } from '../styles/HeaderStyle';
import { useState } from "react";
import logo from '../assets/logo-db.svg';
import iconoMenu from '../assets/menú.svg';
import MenuMobile from './molecules/MenuMobile';
import Menu from './molecules/Menu';
import { useNavigate } from 'react-router-dom';

function Header({showBtnSignIn,
  setShowBtnSignIn,
  showBtnRegister,
  setShowBtnRegister
}) {
  const [ showMenu, setShowMenu ] = useState(false);
  const navigate = useNavigate();

  return (
    <Contenedor>
        <div onClick={() => {
          
          setShowBtnRegister(true)
          setShowBtnSignIn(true)
          navigate("/")
          
          }}>
            <img src={ logo } alt='logo'/>
        </div>
        <IconoMenu onClick={() => setShowMenu(!showMenu)}>
          <img src={ iconoMenu }/>
        </IconoMenu>
        <Menu showBtnRegister={showBtnRegister} setShowBtnRegister={setShowBtnRegister} showBtnSignIn={showBtnSignIn} setShowBtnSignIn={setShowBtnSignIn}/>
        <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} showBtnRegister={showBtnRegister} setShowBtnRegister={setShowBtnRegister} showBtnSignIn={showBtnSignIn} setShowBtnSignIn={setShowBtnSignIn}/>
    </Contenedor>
  )
}

export default Header;