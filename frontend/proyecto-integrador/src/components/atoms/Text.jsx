import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

function Text({ type, color = "black", text }) {
  //primary
  //secondary
  //tertiary
  //quaternary
  const theme = useTheme();
  const textColor =
    color == "primary"
      ? theme.primary
      : color == "secondary"
      ? theme.secondary
      : color == "tertiary"
      ? theme.tertiary
      : color == "quaternary"
      ? theme.quaternary
      : color == "white"
      ? theme.white
      : theme.black

  const Heading1 = styled.h1`
    font-size: 1.5rem;
    color: ${textColor};
  `;

  const Heading2 = styled.h1`
    font-size: 1.3rem;
    color: ${textColor};
  `;

  const Heading3 = styled.h1`
    font-size: 1rem;
    color: ${textColor};
  `;

  const Heading4 = styled.h1`
    font-size: 0.9rem;
    color: ${textColor};
  `;

  const Text1 = styled.p`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${textColor};
  `;

  const Text2 = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: ${textColor};
  `;

  switch (type) {
    case "h1":
      return <Heading1>{text}</Heading1>;
    case "h2":
      return <Heading2>{text}</Heading2>;
    case "h3":
      return <Heading3>{text}</Heading3>;
    case "h4":
      return <Heading4>{text}</Heading4>;
    case "p1":
      return <Text1>{text}</Text1>;
    case "p2":
      return <Text2>{text}</Text2>;
    default:
      return <p>{text}</p>;
  }
}

export default Text;
