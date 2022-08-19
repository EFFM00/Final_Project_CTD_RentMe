import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DetallesProducto.css";
import Text from "./atoms/Text";
import Arrow from "../assets/arrow.svg";

function DetallesProducto () {
    const navigate = useNavigate();
    return (
    <header className="BloqueHeader">
        <div className="titulo1">
        <Text type="h4" color='white' text="Hotel"/>
        </div>
        <div className="titulo2">
        <Text type="h1" color='white' text="Hermitage Hotel"/>
        </div>
        <div>
        <img className="arrow" src={Arrow} alt="arrow" />
        </div>
    </header>
    )
}
export default DetallesProducto