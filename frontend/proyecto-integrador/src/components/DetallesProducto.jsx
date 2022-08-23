import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/DetallesProducto.css";
import Text from "./atoms/Text";
import Arrow from "../assets/arrow.svg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PetsIcon from "@mui/icons-material/Pets";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CountertopsIcon from "@mui/icons-material/Countertops";
import TvIcon from "@mui/icons-material/Tv";
import CalendarioReservas from "./molecules/CalendarioReservas";

function DetallesProducto() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      
      {/* Bloque Header */}

      <header className="BloqueHeader">
        <div className="CategoriaDelProducto">
          <Text type="h4" color="white" text="Hotel" />
        </div>
        <div className="TituloDelProducto">
          <Text type="h1" color="white" text="Hermitage Hotel" />
        </div>
        <div>
          <Link to={"/"}>
            <img className="arrow" src={Arrow} alt="arrow" />
          </Link>
        </div>
      </header>

      {/* Bloque Ubicacion */}

      <div className="BloqueUbicacion">
        <div className="DatosUbi">
          <Text
            type="p1"
            color="secondary"
            text="Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina"
          />
        </div>
        <FmdGoodIcon fontSize="small" className="Ubi" />
        <div className="Distancia">
          <Text type="p1" color="secondary" text="A 940 m del centro " />
        </div>
      </div>

      {/* Compartir Favoritos */}

      <div className="IconComp">
        <ShareIcon />
      </div>
      <div className="IconFav">
        <FavoriteBorderIcon />
      </div>

      {/* Carrusel */}

      {/* <div className="carrusel">
        <img
          className="imagen"
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          alt=""
        />
      </div> */}

      {/* Bloque Descripcion */}

      <div className="BloqueDescripcion">
        <Text
          type="h1"
          color="secondary"
          text="Alójate en el corazón de Buenos Aires"
        />
        <div className="TextoDeDescripcion">
          <Text
            type="p1"
            text="Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal."
          />
          <br />
          <Text
            type="p1"
            text="Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes."
          />
          <br />
          <Text
            type="p1"
            text="El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.
          El establecimiento sirve un desayuno variado de 07:00 a 10:30."
          />
        </div>
      </div>

      {/* Bloque Caracteristicas */}

      <div className="TituloC">
        <Text type="h1" color="secondary" text="¿Qué ofrece este lugar?" />
      </div>
      <div className="BloqueDeCaracteristicas">
        <div className="caracteristicas">
          <CountertopsIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Cocina" />
        </div>
        <div className="caracteristicas">
          <TvIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Televisor" />
        </div>
        <div className="caracteristicas">
          <AcUnitIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Aire acondicionado" />
        </div>
        <div className="caracteristicas">
          <PetsIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Apto mascotas" />
        </div>
        <div className="caracteristicas">
          <DirectionsCarIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Estacionamiento gratuito" />
        </div>
        <div className="caracteristicas">
          <PoolIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Pileta" />
        </div>
        <div className="caracteristicas">
          <WifiIcon fontSize="small" className="iconosC" />
          <Text type="p1" text="Wifi" />
        </div>
      </div>

      {/* Bloque Calendario */}

      {/* <div>
      <CalendarioReservas/>
       </div> */}

      {/* Bloque de Politicas */}

      <div className="TituloP">
        <Text type="h1" color="secondary" text="Qué tenes que saber" />
      </div>

      <div className="BloqueDePoliticas">
        <div className="politicas">
          <Text type="h3" color="secondary" text="Normas de la casa" />
          <p className="textoP">
            <Text type="p1" text="Check-out: 10:00" />
          </p>
          <p className="textoP">
            <Text type="p1" text="No se permiten fiestas" />
          </p>
          <p className="textoP">
            <Text type="p1" text="No fumar" />
          </p>
        </div>
        <div className="politicas">
          <Text type="h3" color="secondary" text="Salud y seguridad" />
          <p className="textoP">
            <Text
              type="p1"
              text="Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus"
            />
          </p>
          <p className="textoP">
            <Text type="p1" text="Detector de humo" />
          </p>
          <p className="textoP">
            <Text type="p1" text="Depósito de seguridad" />
          </p>
        </div>
        <div className="politicas">
          <Text type="h3" color="secondary" text="Políticas de cancelación" />
          <p className="textoP">
            <Text
              type="p1"
              text="Agregá las fechas de tu viaje para obtener los detalles de cancelacion de esta estadía"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
export default DetallesProducto;
