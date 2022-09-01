import React from 'react'
import Text from '../atoms/Text'
import Calendar from 'react-calendar';
import { ContainerCalendar, ContenedorBoton, SeccionReserva, Titulo } from '../../styles/CalendarioReservaStyle';
import Button from '../atoms/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import dayjs from "dayjs"; // ES 2015


function CalendarioReservas() {
    const [ tablet, setTablet ] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const minDate = new Date();

    useEffect(() => {
        const responsive = () => window.innerWidth >= 768 ? setTablet(true) : setTablet(false)
        responsive();
        window.addEventListener("resize", ()=>responsive())
    }, [])


    // const formatDate = (date) => {
    //     return dayjs(date).format("DD/MM/YYYY");
    // }



    return (
    <SeccionReserva>
        <Titulo>
            <Text type="h1" color='secondary' text="Fechas disponibles"/>
        </Titulo>

        <ContainerCalendar id="calendarCont2">
            {
                tablet ? <Calendar showDoubleView={true} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)} value={dateValue} id="calendarCont3"/>
                : <Calendar showDoubleView={false} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)}
                value={dateValue} id="calendarCont4"/>
            }
        </ContainerCalendar>
        <ContenedorBoton>
            <Text type="h3" color='tertiary' text="Agregá tus fechas de viaje para obtener precios exactos"/>
            <Button text="Iniciar reserva"  fullwidth />
        </ContenedorBoton>
    </SeccionReserva>
  )
}

export default CalendarioReservas