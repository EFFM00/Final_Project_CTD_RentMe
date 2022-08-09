import React from "react";
import styled from "styled-components";
import Text from "./Text";

function Button({
  text,
  type = "default",
  width = "m",
  fullwidth = false,
  style,
}) {
  const widthButton =
    width == "xs" ? 164 : width == "s" ? 206 : width == "m" ? 296 : 346;

  const ButtonNoBackgroundStyle = styled.button`
    width: ${fullwidth == true ? "100%" : widthButton + "px"};
    height: 40px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
  `;

  const ButtonStyle = styled.button`
    width: ${fullwidth == true ? "100%" : widthButton + "px"};
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
  `;

  const ButtonMobilStyle = styled.button`
    width: ${fullwidth == true ? "100%" : widthButton + "px"};
    height: 60px;
    border: none;
    text-align: right;
    padding: 15px;
    background-color: transparent;
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
  `;

  return (
    <>
      {/* TODO: Cambiar el ternario por un switch como en Text */}
      {type == "Outline" ? (
        <ButtonNoBackgroundStyle style={style}>
          <Text type="h3" color="primary" text={text} />
        </ButtonNoBackgroundStyle>
      ) : type == "text" ? (
        <ButtonMobilStyle style={style}>
          <Text type="h3" color="secondary" text={text} />
        </ButtonMobilStyle>
      ) : (
        <ButtonStyle style={style} tonStyle>
          <Text type="h3" color="white" text={text} />
        </ButtonStyle>
      )}
    </>
  );
}

export default Button;
