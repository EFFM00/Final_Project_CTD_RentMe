import React from 'react'
import Text from '../atoms/Text'
import Calendar from 'react-calendar';
import { ContainerCalendar, ContenedorBoton, SeccionReserva, Titulo } from '../../styles/CalendarioReservaStyle';
import Button from '../atoms/Button';
import { useState } from 'react';
import { useEffect } from 'react';


function CalendarioReservas() {
    const [ tablet, setTablet ] = useState(false);

    useEffect(() => {
        const responsive = () => window.innerWidth >= 768 ? setTablet(true) : setTablet(false)
        responsive();
        window.addEventListener("resize", ()=>responsive())
    }, [])

  return (
    <SeccionReserva>
        <Titulo>
            <Text type="h1" color='secondary' text="Fechas disponibles"/>
        </Titulo>
        <ContainerCalendar>
            {
                tablet ? <Calendar showDoubleView={true}/>
                : <Calendar showDoubleView={false}/>
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