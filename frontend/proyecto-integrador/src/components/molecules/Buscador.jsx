import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BuscadorStyle, Titulo, Formulario, Section, ContainerCalendar, Contenedor, InputStyle } from "../../styles/BuscadorStyle";
import Button from "../atoms/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import Calendar from 'react-calendar';
import Select from "react-select";
import dayjs from "dayjs"; // ES 2015
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
  const [dateValue, setDateValue] = useState(new Date());

  const minDate = new Date();


  useEffect(() => {
    getCities({setCities});
  }, [])


  const [ tablet, setTablet ] = useState(false);

    useEffect(() => {
        const responsive = () => window.innerWidth >= 768 ? setTablet(true) : setTablet(false)
        responsive();
        window.addEventListener("resize", ()=>responsive())
    }, [])
  

    const formatDate = (date) => {
      return dayjs(date).format("DD/MM/YYYY");
    }  





  return (
    <BuscadorStyle>
      <Titulo>Busca ofertas en hoteles, casas y mucho más</Titulo>
      
      <Formulario onSubmit={ev => {
        ev.preventDefault();

        const startDates = ev.target.startDate;
        alert(startDates);
      }}>

        <Section>
          <LocationOnIconStyle />
          <SelectStyle placeholder="¿A donde vamos?" options={cities.map(city => ({key: city.id, label: city.name, value: city.id}))} />
        </Section>

        <Section onClick={() => setShowCalendar(!showCalendar)}>
          <EventIconStyle />
          <label htmlFor="startDate">Ida</label>
          <InputStyle type="text" name="startDate" value={formatDate(dateValue[0])} placeholder='Ida' onChange={(value) => setDateValue(value)}/>
        </Section>

        <Section onClick={() => setShowCalendar(!showCalendar)}>
          <EventIconStyle />
          <label htmlFor="endDate">Vuelta</label>
          <InputStyle type="text" name="endDate" value={formatDate(dateValue[1])} placeholder='Vuelta' onChange={(value) => setDateValue(value)}/>
        </Section>

        <Contenedor showCalendar={showCalendar} setShowCalendar={setShowCalendar}>
              <ContainerCalendar>
                {
                  tablet ? <CalendarStyle showDoubleView={true} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)} value={dateValue}/>
                  : <CalendarStyle showDoubleView={false} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)}
                  value={dateValue} />
                }
              </ContainerCalendar>
            </Contenedor>
        <Button text="Buscar" type='submit' fullwidth />
      </Formulario>
    </BuscadorStyle>
  );
}

export default Buscador;
