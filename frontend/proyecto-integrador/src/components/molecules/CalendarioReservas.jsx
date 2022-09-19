import React from "react";
//import Text from "../atoms/Text";
import Calendar from "react-calendar";
import { ContainerCalendar } from "../../styles/CalendarioReservaStyle";
import { useState } from "react";
import { useEffect } from "react";
import { isWithinInterval } from "date-fns";


function CalendarioReservas({ fechasOcupadas }) {
    const [tablet, setTablet] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    // console.log("start: " + dateValue[0], "end: " + dateValue[1]);
    const [enableRange, setEnableRange] = useState(true);
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

    function validarFechaRango(inicio, fin, fecha) {
        if(inicio <= fecha && fecha <= fin) {
            return true;
        }
        return false;
    }

    function verificarRangoDentroDeOtroRango() {
        rangoFechas.forEach(reserva => {
            reserva.forEach(fecha => {
                if(validarFechaRango(dateValue[0], dateValue[1], fecha)){
                    setEnableRange(false);
                    console.log(enableRange, "enableRange False");
                } else {
                    setEnableRange(true);
                    console.log(enableRange, "enableRange True");
                }
            })
        })

        setEnableRange(true);
    }

    const onChangeRange = (value) => {
        setDateValue(value)
        verificarRangoDentroDeOtroRango()
    }

    useEffect(() => {
        const responsive = () =>
            window.innerWidth >= 768 ? setTablet(true) : setTablet(false);
        responsive();
        window.addEventListener("resize", () => responsive());
    }, []);

    // console.log(enableRange, "enableRange");
    // console.log(fechasOcupadas, "fechasOcupadas");
    console.log(rangoFechas, "rangoFechas");

    return (
        <>
            <ContainerCalendar id="calendarCont2">
                {tablet ? (
                    <Calendar
                        showDoubleView={true}
                        selectRange={enableRange}
                        minDate={minDate}
                        onChange={(value) => onChangeRange(value)}
                        value={dateValue}
                        id="calendarCont3"
                        tileDisabled={tileDisabled}
                    />
                ) : (
                    <Calendar
                        showDoubleView={false}
                        selectRange={enableRange}
                        minDate={minDate}
                        onChange={(value) => onChangeRange(value)}
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
