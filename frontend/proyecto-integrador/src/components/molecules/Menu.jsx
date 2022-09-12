import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Menu({ showBtnRegister = true, setShowBtnRegister, showBtnSignIn = true, setShowBtnSignIn }) {
  const MenuStyle = styled.div`
    display: flex;
    gap: 15px;

    @media screen and (max-width: 767px) {
      display: none;
    }
  `;
  const navigate = useNavigate();

  return (
    <MenuStyle>

      {showBtnRegister ? (
        <Button
          text="Crear cuenta"
          type="Outline"
          width="xs"
          click={() => {
            setShowBtnRegister(false);
            setShowBtnSignIn(true);
            navigate("/sign-up");
          }}
        />
      ) : null
      }

      {
        showBtnSignIn ? (
          <Button
            text="Iniciar sesión"
            type="Outline"
            width="xs"
            click={() => {
              setShowBtnSignIn(false);
              setShowBtnRegister(true);
              navigate("/sign-in");
            }}
          />
        ) : null
      }

          <Button
            text="Cerrar sesión"
            type="Outline"
            width="xs"
            click={() => {
              localStorage.removeItem('token')
              navigate("/sign-in");
            }}
          />

    </MenuStyle>
  );
}

export default Menu;
