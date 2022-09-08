import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    BuscadorStyle,
    Titulo,
    Formulario,
    Section,
    ContainerCalendar,
    Contenedor,
    InputStyle,
} from "../../styles/BuscadorStyle";
import Button from "../atoms/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import Calendar from "react-calendar";
import Select from "react-select";
import dayjs from "dayjs"; // ES 2015
import { getCities } from "../../services/Cities";
import { getProductByCityOrDates } from "../../services/Products";

// import { click } from "@testing-library/user-event/dist/click";

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
    `;

    const SelectStyle = styled(Select)`
        width: 100%;

        .css-1s2u09g-control {
            border: none;
            text-align: left;
        }
    `;

    const EventIconStyle = styled(EventIcon)`
        color: ${({ theme }) => theme.tertiary};
    `;

    const formatDate = (date) => {
        return dayjs(date).format("DD-MM-YYYY");
    };

    const formatDateApi = (date) => {
        return dayjs(date).format("YYYY-MM-DD");
    };

    const [dateValue, setDateValue] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [cities, setCities] = useState([]);
    const [tablet, setTablet] = useState(false);
    const [cityValue, setCityValue] = useState("");
    const [conFecha, setConFecha] = useState(true);
    const [conCiudad, setConCiudad] = useState(true);

    const [dataApiProducts, setDataApiProducts] = useState([]);

    const optionsCity = cities.map((city) => ({
        label: city.name,
        value: city.id,
    }));

    const minDate = new Date();
    const startDateVar = () => {
        if (conFecha === false) {
            return "";
        }
        return formatDateApi(dateValue[0]).toString();
    };

    const endDateVar = () => {
        if (conFecha === false) {
            return "";
        }
        return formatDateApi(dateValue[1]).toString();
    };

    useEffect(() => {
        getCities({ setCities });
    }, []);

    useEffect(() => {
        const responsive = () =>
            window.innerWidth >= 768 ? setTablet(true) : setTablet(false);
        responsive();
        window.addEventListener("resize", () => responsive());
    }, []);

    const cambiarDecisionCiudad = () => {
        setConCiudad(!conCiudad);
    };

    const sinFechaDecidida = () => {
        setConFecha(!conFecha);
    };

    const handleSelectChange = (event) => {
        setCityValue(event.value);
    };

    // let objSearch = {
    //     city: cityValue,
    //     startDate: startDateVar(),
    //     endDate: endDateVar(),
    // };

    let cityApi = cityValue;
    let startDateApi = startDateVar();
    let endDateApi = endDateVar();

    // LLAMADO API GET
    const getProdApi = async () => {
        const resp = await getProductByCityOrDates({
            cityApi,
            startDateApi,
            endDateApi
        });
        setDataApiProducts(resp);
        // console.log(resp, "RESP");
        console.log(dataApiProducts, "DATAAPIPRODUCTS");
    };

    useEffect(() => {
    }, [cityApi, startDateApi, endDateApi]);

    const enviarDatos = (event) => {
        event.preventDefault();
        getProdApi();
        //console.log(objSearch, "OBJ");
    };

    return (
        <BuscadorStyle>
            <Titulo>Busca ofertas en hoteles, casas y mucho más</Titulo>

            <form
                onSubmit={enviarDatos}
                id="enviarElementosGet"
                style={{ width: "100%" }}
            >
                <Formulario>
                    <Section>
                        <LocationOnIconStyle />
                        <SelectStyle
                            value={optionsCity.filter(function (option) {
                                return option.value === cityValue || "";
                            })}
                            onChange={handleSelectChange}
                            options={optionsCity}
                            //placeholder="¿A donde vamos?"
                            isDisabled={!conCiudad}
                        />
                    </Section>
                    <div onClick={() => setCityValue("")}>
                        <input
                            type="checkbox"
                            id="buscarCiudad"
                            value={conCiudad}
                            onChange={cambiarDecisionCiudad}
                        />
                        <label htmlFor="buscarCiudad">
                            Aún no he decidido mi destino
                        </label>
                    </div>

                    <Section
                        onClick={() =>
                            conFecha === true
                                ? setShowCalendar(!showCalendar)
                                : setShowCalendar(false)
                        }
                    >
                        <EventIconStyle />
                        <label htmlFor="startDate" disabled={true}>
                            Ida
                        </label>
                        <InputStyle
                            type="text"
                            name="startDate"
                            value={formatDate(dateValue[0])}
                            placeholder="Ida"
                            onChange={(value) => setDateValue(value)}
                            readOnly
                        />
                    </Section>

                    <Section
                        onClick={() =>
                            conFecha === true
                                ? setShowCalendar(!showCalendar)
                                : setShowCalendar(false)
                        }
                    >
                        <EventIconStyle />
                        <label htmlFor="endDate">Vuelta</label>
                        <InputStyle
                            type="text"
                            name="endDate"
                            value={formatDate(dateValue[1])}
                            placeholder="Vuelta"
                            onChange={(value) => setDateValue(value)}
                            readOnly
                        />
                    </Section>
                    <div>
                        <input
                            type="checkbox"
                            id="buscarFecha"
                            value={conFecha}
                            onChange={sinFechaDecidida}
                        />
                        <label htmlFor="buscarFecha">
                            Aún no he decidido mis fechas
                        </label>
                    </div>

                    <Contenedor
                        showCalendar={showCalendar}
                        setShowCalendar={setShowCalendar}
                    >
                        <ContainerCalendar>
                            {tablet ? (
                                <CalendarStyle
                                    showDoubleView={true}
                                    selectRange={true}
                                    minDate={minDate}
                                    onChange={(value) => setDateValue(value)}
                                    value={dateValue}
                                />
                            ) : (
                                <CalendarStyle
                                    showDoubleView={false}
                                    selectRange={true}
                                    minDate={minDate}
                                    onChange={(value) => setDateValue(value)}
                                    value={dateValue}
                                />
                            )}
                        </ContainerCalendar>
                        <Button
                            text="Cerrar calendario"
                            click={() => setShowCalendar(!showCalendar)}
                            fullwidth
                        />
                    </Contenedor>
                    <Button
                        text="Buscar"
                        type="submit"
                        value="Submit"
                        form="enviarElementosGet"
                        fullwidth
                    />
                </Formulario>
            </form>
        </BuscadorStyle>
    );
}

export default Buscador;
