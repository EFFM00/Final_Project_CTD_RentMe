import React from "react";
import Buscador from "../../components/molecules/Buscador";
import ListaBooking from "../../components/ListaBooking";
import ListaCategorias from "../../components/ListaCategorias";
import {
    ContenedorBooking,
    ContenedorCategorias,
    GridBooking,
    GridCategorias,
} from "../../styles/MainStyle";
import Text from "../../components/atoms/Text";
import { useState } from "react";

function Home() {
    const [categoryData, setCategoryData] = useState([]);
    const [clickCat, setClickCat] = useState(false);
    const [titleCat, setTitleCat] = useState("");
    const [clickProd, setClickProd] = useState(false);
    const [idCat, setIdCat] = useState("");
    const [dataFilterProd, setDataFilterProd] = useState([]);

    const renderizarProdCat = () => {
        if (clickCat) {
            return (
                <ListaBooking idCat={idCat} tipoProd={"productosFiltrados"} dataFilterProd={dataFilterProd}/>
            );
        }
    };

    const renderizarProdFiltrados = () => {
        if (clickProd) {
            return (
                <>
                    <h3>Resultados de la búsqueda</h3>
                    <ListaBooking tipoProd="productsDateCity" dataFilterProd={dataFilterProd}/>
                </>
            )
        }
    };

    return (
        <>
            <Buscador clickProd={clickProd} setClickProd={setClickProd}  setDataFilterProd={setDataFilterProd} />
            

            <ContenedorCategorias>
                <Text
                    type="h1"
                    color="secondary"
                    text="Buscar por tipo de alojamiento"
                />
                <GridCategorias>
                    <ListaCategorias
                        categoryData={categoryData}
                        setCategoryData={setCategoryData}
                        clickCat={clickCat}
                        setClickCat={setClickCat}
                        setTitleCat={setTitleCat}
                        setIdCat={setIdCat}
                    />
                </GridCategorias>
            </ContenedorCategorias>

            <div>
                <h3>{titleCat}</h3>
                {renderizarProdCat()}
            </div>

            <div>
                {renderizarProdFiltrados()}
            </div>

            <ContenedorBooking>
                <Text type="h1" color="black" text="Recomendaciones" />
                <GridBooking>
                    <ListaBooking tipoProd="productsRandom" />
                </GridBooking>
            </ContenedorBooking>
        </>
    );
}

export default Home;
