import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import Calendar from 'react-calendar';
import Select from "react-select";
import dataCiudades from '../dataCiudades.json'

function Buscador() {
  const BuscadorStyle = styled.div`
    background-color: ${({ theme }) => theme.tertiary};
    padding: 110px 10px 15px;
    text-align: center;
  `;

  const Titulo = styled.h1`
    color: ${({ theme }) => theme.white};
    margin-bottom: 20px;
  `;

  const Formulario = styled.form`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    position: relative;

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

  const LocationOnIconStyle = styled(LocationOnIcon)`
    color: ${({ theme }) => theme.tertiary};
  `;

  const SelectStyle = styled(Select)`
    width: 100%;
    border: none
  `

  const InputStyle = styled.input`
    height: 38px;
    width: 100%;
    border: none;

    &:focus {
      outline: none;
    }
  `;

  const ContainerCalendar = styled.div`
    border: 1px solid black;

    display: ${({showCalendar}) => showCalendar ? "block" : "none"};
    position: absolute;
    top: 90px;

    @media screen and (min-width: 768px) {
      width: 495px;
      top: 45px;
    }

    @media screen and (min-width: 1024px) {
      width: 600px;
      right: -110px;
    }
  `

  const CalendarStyle = styled(Calendar)`
    background-color: ${({ theme }) => theme.white};
  `

  

  const EventIconStyle = styled(EventIcon)`
    color: ${({ theme }) => theme.tertiary};
  `;

  const [ showCalendar, setShowCalendar ] = useState(false);

  return (
    <BuscadorStyle>
      <Titulo>Busca ofertas en hoteles, casas y mucho más</Titulo>
      <Formulario>
        <Section>
          <LocationOnIconStyle />
          <SelectStyle
            options={dataCiudades.map(ciudad => ({key: ciudad.id, label: ciudad.nombre, value: ciudad.id}))}
          />
        </Section>
        <Section onClick={() => setShowCalendar(!showCalendar)}>
          <EventIconStyle />
          <InputStyle
            // type="date"
            placeholder="Check in - Check out">
          </InputStyle>
        </Section>
        <ContainerCalendar showCalendar={showCalendar} setShowCalendar={setShowCalendar}>
          <CalendarStyle/>
          <Button text="Aplicar"  fullwidth />
        </ContainerCalendar>
        <Button text="Buscar" fullwidth />
      </Formulario>
    </BuscadorStyle>
  );
}

export default Buscador;
