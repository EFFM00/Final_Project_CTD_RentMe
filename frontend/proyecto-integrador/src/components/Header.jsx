import React from "react";
import { Contenedor, IconoMenu } from "../styles/HeaderStyle";
import { useState } from "react";
import logo from "../assets/logo-db.png";
import iconoMenu from "../assets/menú.svg";
import MenuMobile from "./molecules/MenuMobile";
import Menu from "./molecules/Menu";
import { useNavigate } from "react-router-dom";

function Header({
  showBtnSignIn,
  setShowBtnSignIn,
  showBtnRegister,
  setShowBtnRegister,
  user,
  setUser,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <Contenedor>
      <div
        onClick={() => {
          setShowBtnRegister(true);
          setShowBtnSignIn(true);
          navigate("/");
        }}
      >
        <img style={{width: "150px"}} src={logo} alt="logo" />
      </div>
      <IconoMenu onClick={() => setShowMenu(!showMenu)}>
        <img src={iconoMenu} alt={"img_alt"}/>
      </IconoMenu>
      

      <Menu
        showBtnRegister={showBtnRegister}
        setShowBtnRegister={setShowBtnRegister}
        showBtnSignIn={showBtnSignIn}
        setShowBtnSignIn={setShowBtnSignIn}
      />

      <MenuMobile
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showBtnRegister={showBtnRegister}
        setShowBtnRegister={setShowBtnRegister}
        showBtnSignIn={showBtnSignIn}
        setShowBtnSignIn={setShowBtnSignIn}
        user={user}
        setUser={setUser}
      />
    </Contenedor>
  );
}

export default Header;
