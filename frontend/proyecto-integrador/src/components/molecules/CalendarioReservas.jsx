import React from "react";
//import Text from "../atoms/Text";
import Calendar from "react-calendar";
import { ContainerCalendar } from "../../styles/CalendarioReservaStyle";
import { useState } from "react";
import { useEffect } from "react";
import { getAllBookings } from "../../services/Booking";
//import { useParams } from "react-router-dom";
// import dayjs from "dayjs"; // ES 2015

function CalendarioReservas({ idProd }) {
    const [tablet, setTablet] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const minDate = new Date();
    //const { id } = useParams();
    const [fechasNoDisponibles, setFechasNoDisponibles] = useState([]);

    // const formatDate = (date) => {
    //     return dayjs(date).format("DD-MM-YYYY");
    // };

    const getBookings = async () => {
        const resp = await getAllBookings(idProd);

        setFechasNoDisponibles(resp);
    };

    useEffect(() => {
        getBookings();
    });
    console.log(fechasNoDisponibles);

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
                    />
                ) : (
                    <Calendar
                        showDoubleView={false}
                        selectRange={true}
                        minDate={minDate}
                        onChange={(value) => setDateValue(value)}
                        value={dateValue}
                        id="calendarCont4"
                    />
                )}
            </ContainerCalendar>
        </>
    );
}

export default CalendarioReservas;
