import React, { useState, useEffect } from "react";
import {
    FormularioDatos,
    Formurario,
    ReservaStyle,
} from "../../styles/ReservaStyle";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import Select from "react-select";
import { getCategoriesCrearProducto } from "../../services/Categories";
import { getCities } from "../../services/Cities";

export function CreacionProducto() {
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [categorieValue, setCategorieValue] = useState([]);
    const [cityValue, setCityValue] = useState("");

    useEffect(() => {
        try {
            getCities({ setCities });
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        getCategoriesCrearProducto({ setCategories });
    }, []);

    console.log(categories, "CATEGORIES");

    const SelectStyle = styled(Select)`
        width: 100%;

        .css-1s2u09g-control {
            border: none;
            text-align: left;
        }
    `;

    const optionsCategories = categories.map((categorie) => ({
        label: categorie.title,
        value: categorie.id,
    }));

    const optionsCity = cities.map((city) => ({
        label: city.name,
        value: city.id,
    }));

    const handleSelectChange = (event) => {
        setCityValue(event);
    };

    const handleSelectCategorie = (event) => {
        setCategorieValue(event);
    };

    return (
        <>
            <ReservaStyle>
                <Text
                    type="h1"
                    color="secondary"
                    text="Administración de productos"
                />
                <FormularioDatos>
                    <Text type="h2" color="secondary" text="Crear producto" />
                    <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Nombre del producto"
                            />
                        </label>
                        <Formurario type={"text"} />
                    </div>

                    <SelectStyle
                        value={categorieValue}
                        onChange={handleSelectCategorie}
                        options={optionsCategories}
                        placeholder="Seleccione una categoría"
                        isClearable={true}
                    />

                    <SelectStyle
                        defaultInputValue=""
                        value={cityValue}
                        onChange={handleSelectChange}
                        options={optionsCity}
                        placeholder="Seleccione una ciudad"
                        isClearable={true}
                    />

                    <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Dirección"
                            />
                        </label>
                        <Formurario type={"text"} />
                    </div>

                    <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Descripción"
                            />
                        </label>
                        <Formurario type={"textarea"} />
                    </div>





                </FormularioDatos>
                <Button text="Confirmar reserva" fullwidth />
            </ReservaStyle>
        </>
    );
}
