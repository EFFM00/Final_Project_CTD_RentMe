import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/DetallesProducto.css";
import Text from "./atoms/Text";
import Arrow from "../assets/arrow.svg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarioReservas from "./molecules/CalendarioReservas";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/Products";

function DetallesProducto() {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);

  // funcion para obtener los detalles de un solo producto por su id
  const getProd = async () => {
    const resp = await getProductById(id);
    setDataProduct(resp);
  };

  useEffect(() => {
    getProd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div style={{ width: "100%" }}>
      {/* Bloque Header */}
      <header className="BloqueHeader">
        <div className="CategoriaDelProducto">
          <Text type="h4" color="white" text={dataProduct?.category?.title} />
        </div>
        <div className="TituloDelProducto">
          <Text type="h1" color="white" text={dataProduct.title} />
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
            text={`${dataProduct?.city?.name}, ${dataProduct?.city?.country?.name}`}
          />
        </div>
        <FmdGoodIcon fontSize="small" className="Ubi" />
        <div className="Distancia">
          <Text type="p1" color="secondary" text={dataProduct.address} />
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

      <div className="carrusel">
        <h1>Aqui van las imagenes</h1>
        {/* {
          dataProduct?.images?.map(image => 
            <img key={image.id} src={image.url} alt={image.title}/>
          )
        } */}
      </div>

      {/* Bloque Descripcion */}

      <div className="BloqueDescripcion">
        <Text
          type="h1"
          color="secondary"
          text={`Alójate en el corazón de ${dataProduct?.city?.name}`}
        />
        <div className="TextoDeDescripcion">
          <Text type="p1" text={dataProduct.description} />
        </div>
      </div>

      {/* Bloque Caracteristicas */}

      <div className="TituloC">
        <Text type="h1" color="secondary" text="¿Qué ofrece este lugar?" />
      </div>
      <div className="BloqueDeCaracteristicas">
        <div className="caracteristicas">
          <ul className="listaCaracteristicas" style={{paddingLeft: "30px"}}>
            {
              dataProduct?.characteristicsXProducts?.map(item =>
                <li className="itemCaracteristica" key={item.id}>{item?.characteristic?.description}</li>
              )
            }
          </ul>
        </div> 
      </div>

      {/* Bloque Calendario */}

      <div>
        <CalendarioReservas/>
      </div>

      {/* Bloque de Politicas */}

      <div className="TituloP">
        <Text type="h1" color="secondary" text="Qué tenes que saber" />
      </div>

      <div className="BloqueDePoliticas">
          <ul className="listaPoliticas" style={{paddingLeft: "30px"}}>
            {
              dataProduct?.policiesXProducts?.map(item =>
                
                <li className="itemPolitica" key={item.id}>{item?.policy?.policyType?.name} - {item?.policy?.description}</li>
              )
            }
          </ul>
      </div>
    </div>
  );
}
export default DetallesProducto;
