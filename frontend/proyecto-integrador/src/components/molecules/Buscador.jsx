import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

function Buscador() {
  const BuscadorStyle = styled.div`
    border: 1px solid black;

    background-color: ${({ theme }) => theme.tertiary};
    padding: 110px 10px 15px;
    text-align: center;
  `;

  const Titulo = styled.h1`
    color: ${({ theme }) => theme.white};
    margin-bottom: 20px;
  `;

  const ContainerInput = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    @media screen and (min-width: 1024px) {
      width: 900px;
      margin: auto;
      grid-template-columns: 400px 400px 164px;
    }
  `;

  const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    padding: 0 5px;
  `;

  const InputStyle = styled.input`
    height: 38px;
    width: 100%;
    border: none;

    &:focus {
      outline: none;
    }
  `;

  const LocationOnIconStyle = styled(LocationOnIcon)`
    color: ${({ theme }) => theme.tertiary};
  `;

  const EventIconStyle = styled(EventIcon)`
    color: ${({ theme }) => theme.tertiary};
  `;

  return (
    <BuscadorStyle>
      <Titulo>Busca ofertas en hoteles, casas y mucho más</Titulo>
      <ContainerInput>
        <Section>
          <LocationOnIconStyle />
          <InputStyle placeholder="¿A dónde vamos?"></InputStyle>
        </Section>
        <Section>
          <EventIconStyle />
          <InputStyle placeholder="Check in - Check out"></InputStyle>
        </Section>
        <Button text="Buscar" fullwidth />
      </ContainerInput>
    </BuscadorStyle>
  );
}

export default Buscador;
