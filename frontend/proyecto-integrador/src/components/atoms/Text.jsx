import React from "react";
import { useTheme } from "styled-components";
import { Heading1, Heading2, Heading3, Heading4, Text1, Text2 } from '../../styles/atoms/TextStyle'

function Text({ type, color = "black", text }) {
  //primary
  //secondary
  //tertiary
  //quaternary
  const theme = useTheme();

  const textColor =
    color === "primary"
      ? theme.primary
      : color === "secondary"
      ? theme.secondary
      : color === "tertiary"
      ? theme.tertiary
      : color === "quaternary"
      ? theme.quaternary
      : color === "white"
      ? theme.white
      : theme.black


  switch (type) {
    case "h1":
      return <Heading1 textColor={textColor}>{text}</Heading1>;
    case "h2":
      return <Heading2 textColor={textColor}>{text}</Heading2>;
    case "h3":
      return <Heading3 textColor={textColor}>{text}</Heading3>;
    case "h4":
      return <Heading4 textColor={textColor}>{text}</Heading4>;
    case "p1":
      return <Text1 textColor={textColor}>{text}</Text1>;
    case "p2":
      return <Text2 textColor={textColor}>{text}</Text2>;
    default:
      return <p>{text}</p>;
  }
}

export default Text;
