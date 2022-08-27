import React from "react";
import Text from "./Text";
import { ButtonNoBackgroundStyle, ButtonStyle, ButtonMobilStyle } from '../../styles/atoms/ButtonStyle'

function Button({
  text,
  type = "default",
  width = "m",
  fullwidth = false,
  style,
  click
}) {

  const widthButton =
    width === "xs" ? 164 : width === "s" ? 206 : width === "m" ? 296 : 346;

  const switchType = (type) => {
    switch (type) {
      case "Outline":
        return (
          <ButtonNoBackgroundStyle style={style} onClick={click} fullwidth={fullwidth} width={width} widthButton={widthButton}>
            <Text type="h3" color="primary" text={text} />
          </ButtonNoBackgroundStyle>
        );

      case "text":
        return (
          <ButtonMobilStyle style={style} onClick={click} fullwidth={fullwidth} width={width} widthButton={widthButton}>
            <Text type="h3" color="secondary" text={text} />
          </ButtonMobilStyle>
        )
      
      default:
        return (
          <ButtonStyle style={style} onClick={click}  fullwidth={fullwidth} width={width} widthButton={widthButton}>
            <Text type="h3" color="white" text={text} />
          </ButtonStyle>
        )
      }
    }

  return (
    <>
      {switchType(type)}
    </>
  );
}

export default Button;
