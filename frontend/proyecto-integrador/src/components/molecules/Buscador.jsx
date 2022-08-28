import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BuscadorStyle, Titulo, Formulario, Section, InputStyle, ContainerCalendar, Contenedor,  } from "../../styles/BuscadorStyle";
import Button from "../atoms/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import Calendar from 'react-calendar';
import Select from "react-select";
// import dataCiudades from '../dataCiudades.json'

import { getCities } from "../../services/Cities";

function Buscador() {

  const LocationOnIconStyle = styled(LocationOnIcon)`
    color: ${({ theme }) => theme.tertiary};
  `;

  const CalendarStyle = styled(Calendar)`
    background-color: ${({ theme }) => theme.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .react-select__control {
      border: none;
    }
  `

  const SelectStyle = styled(Select)`
    width: 100%;

    .css-1s2u09g-control {
      border: none;
      text-align: left;
    }
  `
  
  const EventIconStyle = styled(EventIcon)`
    color: ${({ theme }) => theme.tertiary};
  `;

  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ cities, setCities] = useState([]);

  useEffect(() => {
    getCities({setCities});
  }, [])


  const [ tablet, setTablet ] = useState(false);

    useEffect(() => {
        const responsive = () => window.innerWidth >= 768 ? setTablet(true) : setTablet(false)
        responsive();
        window.addEventListener("resize", ()=>responsive())
    }, [])
  

  return (
    <BuscadorStyle>
      <Titulo>Busca ofertas en hoteles, casas y mucho más</Titulo>
      <Formulario>
        <Section>
          <LocationOnIconStyle />
          <SelectStyle
            // options={dataCiudades.map(ciudad => ({key: ciudad.id, label: ciudad.nombre, value: ciudad.id}))}
            placeholder="¿A donde vamos?"
            options={cities.map(city => ({key: city.id, label: city.name, value: city.id}))}
          />
        </Section>
        <Section onClick={() => setShowCalendar(!showCalendar)}>
          <EventIconStyle />
          <InputStyle
            // type="date"
            placeholder="Check in - Check out">
          </InputStyle>
        </Section>
        <Contenedor showCalendar={showCalendar} setShowCalendar={setShowCalendar}>
          <ContainerCalendar>
            {
              tablet ? <CalendarStyle showDoubleView={true} selectRange={true}/>
              : <CalendarStyle showDoubleView={false} selectRange={true}/>
            }
          </ContainerCalendar>
          {
            tablet ? <Button text="Aplicar"  width="m" />
            : <Button text="Aplicar" fullwidth />
          }
        </Contenedor>
        <Button text="Buscar" fullwidth />
      </Formulario>
    </BuscadorStyle>
  );
}

export default Buscador;
