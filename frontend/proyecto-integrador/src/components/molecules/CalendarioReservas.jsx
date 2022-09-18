import React from "react";
//import Text from "../atoms/Text";
import Calendar from "react-calendar";
import { ContainerCalendar } from "../../styles/CalendarioReservaStyle";
import { useState } from "react";
import { useEffect } from "react";
import { isWithinInterval } from "date-fns";
//import { useParams } from "react-router-dom";
import dayjs from "dayjs"; // ES 2015

function CalendarioReservas({ fechasOcupadas }) {
    const [tablet, setTablet] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const minDate = new Date();

    const stringToDate = (date) => {
        return new Date(date);
    };

    let rangoFechas = [];

    fechasOcupadas.map((reserva) => {
        let fechas = [];
        let ida = stringToDate(reserva.checkIn);
        let vuelta = stringToDate(reserva.checkOut);
        vuelta = stringToDate(vuelta.setDate(vuelta.getDate() + 1));

        fechas.push(ida);
        fechas.push(vuelta);

        return rangoFechas.push(fechas);
    });
    console.log(rangoFechas, "rangoFechas");

    function isWithinRange(date, range) {
        return isWithinInterval(date, { start: range[0], end: range[1] });
    }

    function isWithinRanges(date, ranges) {
        return ranges.some((range) => isWithinRange(date, range));
    }

    function tileDisabled({ date, view }) {
        if (view === "month") {
            return isWithinRanges(date, rangoFechas);
        }
    }

    function verificarRangoDentroDeOtroRango() {
        rangoFechas.map(reserva => {
            reserva.map(fecha => {
                if(isWithinInterval(fecha, { start: dateValue[0], end: dateValue[1]})){
                    return false;
                }
            })
        })

        return true;
    }

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
                        selectRange={verificarRangoDentroDeOtroRango}
                        minDate={minDate}
                        onChange={(value) => setDateValue(value)}
                        value={dateValue}
                        id="calendarCont3"
                        tileDisabled={tileDisabled}
                    />
                ) : (
                    <Calendar
                        showDoubleView={false}
                        selectRange={verificarRangoDentroDeOtroRango}
                        minDate={minDate}
                        onChange={(value) => setDateValue(value)}
                        value={dateValue}
                        id="calendarCont4"
                        tileDisabled={tileDisabled}
                    />
                )}
            </ContainerCalendar>
        </>
    );
}

export default CalendarioReservas;
