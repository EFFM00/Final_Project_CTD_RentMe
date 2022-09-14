import React from 'react'
import Text from '../atoms/Text'
import Calendar from 'react-calendar';
import { ContainerCalendar} from '../../styles/CalendarioReservaStyle';
import { useState } from 'react';
import { useEffect } from 'react';
// import dayjs from "dayjs"; // ES 2015


function CalendarioReservas() {
    const [ tablet, setTablet ] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const minDate = new Date();

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

        <ContainerCalendar id="calendarCont2">
            {
                tablet ? <Calendar showDoubleView={true} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)} value={dateValue} id="calendarCont3"/>
                : <Calendar showDoubleView={false} selectRange={true} minDate={minDate} onChange={(value) => setDateValue(value)}
                value={dateValue} id="calendarCont4"/>
            }
        </ContainerCalendar>
    </>
  )
}

export default CalendarioReservas