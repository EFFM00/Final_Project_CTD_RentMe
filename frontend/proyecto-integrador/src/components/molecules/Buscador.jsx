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
import { click } from "@testing-library/user-event/dist/click";






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


    // document.addEventListener("click", function(event){
    //   let clickE = document.getElementById("calendarCont");
    //   if(!clickE.contains(event.target)) {
    //     alert("Click fuera")
    //   } else {
    //     alert("Click adentro")
    //   }
    // })

    const mostrarCalendario = () => {
      document.addEventListener("click", function(event){
        let clickEStart = document.getElementById("calendarContStart");
        let clickEEnd = document.getElementById("calendarContEnd");
        let calendarCont1 = document.getElementById("calendarCont1");
        let calendarCont2 = document.getElementById("calendarCont2");
        let calendarCont3 = document.getElementById("calendarCont3");
        let calendarCont4 = document.getElementById("calendarCont4");
        if(clickEStart.contains(event.target) || clickEEnd.contains(event.target || calendarCont1.contains(event.target) || calendarCont2.contains(event.target) || calendarCont3.contains(event.target) || calendarCont4.contains(event.target))) {
          console.log("Click adentro")
          setShowCalendar(true)
          console.log(showCalendar, "dentro");
        } else {
          console.log("Click fuera")
          setShowCalendar(false)
          console.log(showCalendar, "fuera");
        }
      })
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

        {/* <Section onClick={() => setShowCalendar(!showCalendar)} id="calendarCont" > */}
        <Section onClick={mostrarCalendario} id="calendarContStart" >
          <EventIconStyle />
          <label htmlFor="startDate">Ida</label>
          <InputStyle type="text" name="startDate" value={formatDate(dateValue[0])} placeholder='Ida' onChange={(value) => setDateValue(value)}/>
        </Section>

        <Section onClick={mostrarCalendario} id="calendarContEnd" >
          <EventIconStyle />
          <label htmlFor="endDate">Vuelta</label>
          <InputStyle type="text" name="endDate" value={formatDate(dateValue[1])} placeholder='Vuelta' onChange={(value) => setDateValue(value)}/>
        </Section>

        <Contenedor showCalendar={showCalendar} setShowCalendar={setShowCalendar} id="calendarCont1">
              <ContainerCalendar id="calendarCont2">
                {
                  tablet ? <CalendarStyle showDoubleView={true} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)} value={dateValue} id="calendarCont3"/>
                  : <CalendarStyle showDoubleView={false} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)}
                  value={dateValue} id="calendarCont4"/>
                }
              </ContainerCalendar>
            </Contenedor>
        <Button text="Buscar" type='submit' fullwidth />
      </Formulario>
    </BuscadorStyle>
  );
}

export default Buscador;
