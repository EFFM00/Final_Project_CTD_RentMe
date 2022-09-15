import React from "react";
//import Text from "../atoms/Text";
import Calendar from "react-calendar";
import { ContainerCalendar } from "../../styles/CalendarioReservaStyle";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs"; // ES 2015

function CalendarioReservas({ fechasOcupadas }) {
    const [tablet, setTablet] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const minDate = new Date();

    const formatDate = (date) => {
        return dayjs(date).format("YYYY-MM-DD");
    };

    let diasEntreFechas = function (inicio, fin) {
        let inicioDate = new Date(inicio);
        let finDate = new Date(fin);
        let fechas = [];

        while (finDate.getTime() >= inicioDate.getTime()) {
            fechas.push(formatDate(inicioDate));
            inicioDate.setDate(inicioDate.getDate() + 1);
        }

        return fechas;
    };

    let rangosDeshabilitados = [];

    fechasOcupadas.map((reserva) => {
        let fecha = diasEntreFechas(reserva.checkIn, reserva.checkOut);
        return rangosDeshabilitados.push(fecha);
    });


    let rangoSinArray = []
    // eslint-disable-next-line array-callback-return
    rangosDeshabilitados.map(item => {
        item.map(item2 => {
            return rangoSinArray.push(new Date(item2))
        })
    })

    useEffect(() => {
        const responsive = () =>
            window.innerWidth >= 768 ? setTablet(true) : setTablet(false);
        responsive();
        window.addEventListener("resize", () => responsive());
    }, []);

    return (
        <>
            <ContainerCalendar id="calendarCont2">
                {tablet ? (
                    <Calendar
                        showDoubleView={true}
                        selectRange={true}
                        minDate={minDate}
                        onChange={(value) => setDateValue(value)}
                        value={dateValue}
                        id="calendarCont3"
                        tileDisabled={(date) => rangoSinArray.some(disabledDate => date.getDate() === disabledDate.getDate()) }
                    />
                ) : (
                    <Calendar
                        showDoubleView={false}
                        selectRange={true}
                        minDate={minDate}
                        onChange={(value) => setDateValue(value)}
                        value={dateValue}
                        id="calendarCont4"
                        tileDisabled={(date) => rangoSinArray.some(disabledDate => date.getDate() === disabledDate.getDate()) }
                    />
                )}
            </ContainerCalendar>
        </>
    );
}

export default CalendarioReservas;
