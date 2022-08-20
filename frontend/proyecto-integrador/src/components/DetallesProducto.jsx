import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DetallesProducto.css";
import Text from "./atoms/Text";
import Arrow from "../assets/arrow.svg";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
function DetallesProducto () {
    const navigate = useNavigate();
    return (
    <><header className="BloqueHeader">
            <div className="titulo1">
                <Text type="h4" color='white' text="Hotel" />
            </div>
            <div className="titulo2">
                <Text type="h1" color='white' text="Hermitage Hotel" />
            </div>
            <div>
                <img className="arrow" src={Arrow} alt="arrow" />
            </div>
        </header>
        <div className="Ubicacion">
            <div className="DatosUbi">
        <Text type="p1" color='secondary' text="Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina"/>
            </div>
            <FmdGoodIcon fontSize="small" className="Ubi"/>
            <div className="Distancia">
        <Text type="p1" color='secondary' text="A 940 m del centro "/>
            </div>
            </div>
            </>
    )
}
export default DetallesProducto