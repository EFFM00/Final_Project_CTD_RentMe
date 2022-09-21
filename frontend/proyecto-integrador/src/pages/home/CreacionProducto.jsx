import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    // FormularioDatos,
    // Formurario,
    ReservaStyle,
} from "../../styles/ReservaStyle";
import { Formurario,TituloCP,ArrowHeader, ContenedorFormurarios, BloqueFormurario, FormurariosCP, BotonFormurario } from "../../styles/CreacionProductoStyle.jsx";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import Select from "react-select";
import Arrow from "../../assets/arrow.svg";
import { getCategories } from "../../services/Categories";
import { getCities } from "../../services/Cities";
import { getCharacteristics } from "../../services/Characteristics";
import { getPoliciesType } from "../../services/Policies";
export function CreacionProducto() {
    const [categorias, setCategorias] = useState([]);
    const [cities, setCities] = useState([]);
    const [policiesTypes, setPoliciesTypes] = useState([]);
    const [categorieValue, setCategorieValue] = useState([]);
    const [cityValue, setCityValue] = useState("");
    const [characteristics, setCharacteristics] = useState([]);
    const [characteristicsValue, setCharacteristicsValue] = useState([]);
    const [politicValue, setPoliticValue] = useState([]);

    const SelectStyle = styled(Select)`
        width: 100%;

        .css-1s2u09g-control {
            margin-top:5px;
            text-align: left;
        }
    `;

    useEffect(() => {
        try {
            getPoliciesType({ setPoliciesTypes });
        } catch (error) {
            console.error(error);
        }
    }, []);

    console.log("policies", policiesTypes);

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

    const optionsPoliciesType = policiesTypes.map((politics => ({
        label: politics.name,
        value: politics.id
    })))


    const handleSelectChange = (event) => {
        setCityValue(event);
    };

    const handleSelectPoliciesType = (event) => {
        setPoliticValue(event);
    };

    const handleSelectCategorie = (event) => {
        setCategorieValue(event);
    };

    const handleSelectCharacter = (event) => {
        setCharacteristicsValue(event);
        // console.log(characteristicsValue);
    };
    // console.log(characteristicsValue, "characteristicsValue");

    return (
        <>
            <ReservaStyle>
                <TituloCP>
                <Text
                    type="h1"
                    color="secondary"
                    text="Administración de productos"
                />
                <ArrowHeader>
                    <Link to={"/"}>
                        <img className="arrow" src={Arrow} alt="arrow" />
                    </Link>
                </ArrowHeader>
                </TituloCP>
                 
                 <ContenedorFormurarios>
                 {/* Formurario de creacion de producto */}

                    <Text type="h2" color="secondary" text="Crear producto" />

                <BloqueFormurario>
                    <FormurariosCP>
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

                        <div>
                        <SelectStyle
                            value={categorieValue}
                            onChange={handleSelectCategorie}
                            options={optionsCategories}
                            placeholder="Seleccione una categoría"
                            isClearable={true}
                        />
                        </div>

                        <div>
                        <SelectStyle
                            defaultInputValue=""
                            value={cityValue}
                            onChange={handleSelectChange}
                            options={optionsCity}
                            placeholder="Seleccione una ciudad"
                            isClearable={true}
                        />
                        </div>
                    </FormurariosCP>
                    <BotonFormurario>
                        <Button text="Crear producto" fullwidth/>
                        </BotonFormurario>
                    
                </BloqueFormurario>

                {/* Formurario de creacion de caracteristicas */}

                    <Text
                        type="h2"
                        color="secondary"
                        text="Agregar características"
                    />
                <BloqueFormurario>
                    
                    <FormurariosCP>
                       
                        <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Descripción"
                            />
                        </label>
                        <Formurario type={"text"} />
                        
                        </div>
                    
                    <div>
                    <label>
                            <Text type="p1" color="secondary" text="Icono" />
                        </label>
                        <Formurario type={"text"} />
                    </div>
                    <div>
                    <label>
                        <Text
                                type="p1"
                                color="secondary"
                                text="Crear nueva característica"
                            />
                            </label>
                        <SelectStyle
                            value={characteristicsValue}
                            onChange={handleSelectCharacter}
                            options={optionsCharacteristics}
                            placeholder="Seleccione las características"
                            isClearable={true}
                            isMulti={true}
                        />
                    </div>
                    </FormurariosCP>
                    <BotonFormurario>
                        <Button text="Crear característica" fullwidth/>
                    </BotonFormurario>
                </BloqueFormurario>

                  {/* Formurario de creacion de imagenes */}

                    <Text type="h2" color="secondary" text="Agregar imágenes" />
                <BloqueFormurario>
                    <FormurariosCP>
                        <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Url imagen"
                            />
                        </label>
                        <Formurario type={"text"} />
                        </div>
                    </FormurariosCP>
                    <BotonFormurario>
                        <Button text="Agregar imagen" fullwidth/>
                    </BotonFormurario>
                </BloqueFormurario>

               {/* Formurario de creacion de politicas */}

                    <Text
                        type="h2"
                        color="secondary"
                        text="Agregar políticas"
                    />
                <BloqueFormurario>
                    <FormurariosCP>
                        <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Política de la vivienda"
                            />
                        </label>
                        <Formurario type={"text"} />
                        </div>
                        

                        <div>
                        <label>
                            <Text
                                type="p1"
                                color="secondary"
                                text="Tipo de politica"
                            />
                        </label>
                            <SelectStyle
                                value={politicValue}
                                onChange={handleSelectPoliciesType}
                                options={optionsPoliciesType}
                                placeholder="Seleccione el tipo de política"
                                isClearable={true}
                            />
                        </div>

                    </FormurariosCP>
                    <BotonFormurario>
                    <Button text="Agregar política" fullwidth />
                    </BotonFormurario>
                </BloqueFormurario>
                </ContenedorFormurarios>
            </ReservaStyle>
        </>
    );
}
