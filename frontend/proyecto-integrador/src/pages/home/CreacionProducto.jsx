import React, { useState, useEffect } from "react";
import {
    // FormularioDatos,
    Formurario,
    ReservaStyle,
} from "../../styles/ReservaStyle";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import Select from "react-select";
import { getCategories } from "../../services/Categories";
import { getCities } from "../../services/Cities";
import { getCharacteristics } from "../../services/Characteristics";
export function CreacionProducto() {
    const [categorias, setCategorias] = useState([]);
    const [cities, setCities] = useState([]);
    const [categorieValue, setCategorieValue] = useState([]);
    const [cityValue, setCityValue] = useState("");
    const [characteristics, setCharacteristics] = useState([]);
    const [characteristicsValue, setCharacteristicsValue] = useState([]);

    const SelectStyle = styled(Select)`
        width: 100%;

        .css-1s2u09g-control {
            border: none;
            text-align: left;
        }
    `;

    useEffect(() => {
        try {
            getCities({ setCities });
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        getCharacteristics({ setCharacteristics });
    }, []);

    // console.log(characteristics, "Characteristics");

    useEffect(() => {
        getCategories({ setCategorias });
    }, []);

    const optionsCharacteristics = characteristics.map((character) => ({
        label: character.description,
        value: character.id,
    }));

    const optionsCategories = categorias.map((categorie) => ({
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

    const handleSelectCharacter = (event) => {
        setCharacteristicsValue(event);
        console.log(characteristicsValue);
    };
    console.log(characteristicsValue, "characteristicsValue");

    return (
        <>
            <ReservaStyle>
                <Text
                    type="h1"
                    color="secondary"
                    text="Administración de productos"
                />

                <div>
                    <Text type="h2" color="secondary" text="Crear producto" />
                    <form>
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

                        <div>
                            <label>
                                <Text
                                    type="p1"
                                    color="secondary"
                                    text="Url imagen principal"
                                />
                            </label>
                            <Formurario type={"text"} />
                        </div>

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
                    </form>
                    <Button text="Crear producto" fullwidth />
                </div>

                <div>
                    <Text
                        type="h2"
                        color="secondary"
                        text="Agregar características"
                    />
                    <form>
                        <SelectStyle
                            value={characteristicsValue}
                            onChange={handleSelectCharacter}
                            options={optionsCharacteristics}
                            placeholder="Seleccione las características"
                            isClearable={true}
                            isMulti={true}
                        />

                        <form>
                            <Text
                                type="h3"
                                color="secondary"
                                text="Crear características"
                            />
                            <label>
                                <Text
                                    type="p1"
                                    color="secondary"
                                    text="Descripción"
                                />
                            </label>
                            <Formurario type={"text"} />
                            <Button text="Crear característica" fullwidth/>
                        </form>
                    </form>
                </div>

            </ReservaStyle>
        </>
    );
}
