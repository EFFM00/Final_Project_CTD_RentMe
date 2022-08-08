import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import CloseIcon from "@mui/icons-material/Close";
import SocialMedia from "../atoms/SocialMedia";

function MenuMobile({ showMenu, setShowMenu }) {
  const MenuMobileStyle = styled.div`
    background-color: ${({ theme }) => theme.fondo};
    position: absolute;
    top: 0;
    right: ${showMenu ? "0" : "-100%"};
    width: 75%;
    height: 100vh;
    z-index: 10;
    // transition: 0.5s all ease;
  `;

  const CloseIconStyle = styled(CloseIcon)`
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${({ theme }) => theme.white};
  `;

  const Titulo = styled.div`
    background-color: ${({ theme }) => theme.primary};
    height: 180px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    padding: 10px;
  `;

  const ContainerSM = styled.div`
    position: absolute;
    bottom: 20px;
    right: 10px;
  `

  return (
    <>
    <MenuMobileStyle>
      <CloseIconStyle onClick={() => setShowMenu(false)} />
      <Titulo>
        <Text type="h2" color="white" text="MENÚ" />
      </Titulo>
      <Button
        text="Crear cuenta"
        type="text"
        fullwidth
        />
      <hr
        style={{
            height: "1px",
            width: "95%",
            backgroundColor: "#545776",
            margin: "auto",
        }}
        />
      <Button
        text="Iniciar sesión" 
        type="text"
        fullwidth
        />
      <ContainerSM>
        <SocialMedia/>
      </ContainerSM>
    </MenuMobileStyle>
    </>
  );
}

export default MenuMobile;
