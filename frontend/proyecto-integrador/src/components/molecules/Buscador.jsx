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

  const Formulario = styled.div`
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

    /* ~~~ container styles ~~~ */
    margin: auto;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.white};
    padding: 10px;
    border-radius: 8px;
    border: 1px solid black;
    display: ${({showCalendar}) => showCalendar ? "block" : "none"};
    position: absolute;
    top: 1px;



    /* ~~~ navigation styles ~~~ */
    .react-calendar__navigation {
      display: flex;
    
      .react-calendar__navigation__label {
        font-weight: bold;
        background: none;
        border: none;
        width: 7rem;
      }

      .react-calendar__navigation__arrow {
        flex-grow: 0.333;
        border: none;
        background: none;
        padding: 1px;
        width: 15px;
        font-size: 1.4rem;
      }

      .react-calendar__navigation__arrow:hover, .react-calendar__navigation__label:hover {
        color: ${({ theme }) => theme.primary};
      }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-decoration: none;
    display: flex;    
    padding: 0.5rem 0;
    abbr[title] {
      text-decoration: none;
      margin: 0.5rem;
    }
  }


  /* ~~~ button styles ~~~ */
  button {
    margin: 0.6rem;
    background: none;
    border: 0;
    border-radius: 3px;
    padding: 0.3rem;
    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.white};
    }
    &:active {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    text-align: center;
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    
    .react-calendar__tile {
      max-width: initial !important;
      margin: 2px 1px;
      text-align: center;
      
    }
    .react-calendar__tile--range {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: gray;
  }
  .react-calendar__month-view__days__day--weekend {
    font-weight: bold;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
      margin: 15px 5px;
      padding: 15px;
      
    }
  }

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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
          </ContainerCalendar>
        <Button text="Buscar" fullwidth />
      </Formulario>
    </BuscadorStyle>
  );
}

export default Buscador;
