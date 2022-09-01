import React from 'react'
import Text from '../atoms/Text'
import Calendar from 'react-calendar';
import { ContainerCalendar, Titulo } from '../../styles/CalendarioReservaStyle';
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
    <>
        <Titulo>
            <Text type="h1" color='secondary' text="Fechas disponibles"/>
        </Titulo>
        <ContainerCalendar>
            {
                tablet ? <Calendar showDoubleView={true}/>
                : <Calendar showDoubleView={false}/>
            }
        </ContainerCalendar>
    </>
  )
}

export default CalendarioReservas