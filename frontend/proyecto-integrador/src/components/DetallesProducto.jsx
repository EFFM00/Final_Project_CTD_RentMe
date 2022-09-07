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
import Button from "./atoms/Button";
import {
  ContenedorBoton,
  SeccionReserva,
} from "../styles/CalendarioReservaStyle";
import Reserva from "../pages/home/Reserva";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

function DetallesProducto() {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  const [showReservation, setShowReservation] = useState(false);
  const [images, setImages] = useState([{ source: "", caption: "image" }]);
  const [index, setIndex] = useState(-1);
  const [imageCount, setImageCount] = useState(0);
  

  // funcion para obtener los detalles de un solo producto por su id
  const getProd = async () => {
    const resp = await getProductById(id);
    setDataProduct(resp);

    let img = resp.images.map((item) => {
      return {
        src: item.url,
        thumbnail: item.url,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
      };
    });
    setImages(img);
    setImageCount(img.length - 2);
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

      {showReservation === false ? (
        <div>
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

          <div className="image-gallery three-cols-gallery">
            {dataProduct?.images?.map((img, index) => (
              <div
                className="gallery-item"
                data-see-more={imageCount + "+ See more"}
                onClick={() => setIndex(index)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="gallery-item-image"
                />
              </div>
            ))}
          </div>
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            carousel={2}
            slides={images}
            plugins={[Thumbnails, Zoom, Fullscreen]}
            zoom={{
              maxZoomPixelRatio: 3,
            }}
          />

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
              <ul
                className="listaCaracteristicas"
                style={{ paddingLeft: "30px" }}
              >
                {dataProduct?.characteristicsXProducts?.map((item) => (
                  <li className="itemCaracteristica" key={item.id}>
                    {item?.characteristic?.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bloque Calendario */}

          <SeccionReserva>
            <CalendarioReservas />
            <ContenedorBoton>
              <Text
                type="h3"
                color="tertiary"
                text="Agregá tus fechas de viaje para obtener precios exactos"
              />
              <Button
                text="Iniciar reserva"
                fullwidth
                click={() => setShowReservation(true)}
              />
            </ContenedorBoton>
          </SeccionReserva>
        </div>
      ) : (
        <Reserva
          mainPictureUrl={dataProduct.mainPictureUrl}
          category={dataProduct?.category?.title}
          title={dataProduct.title}
          address={dataProduct.address}
        />
      )}

      {/* Bloque de Politicas */}

      <div className="TituloP">
        <Text type="h1" color="secondary" text="Qué tenes que saber" />
      </div>

      <div className="BloqueDePoliticas">
        <ul className="listaPoliticas" style={{ paddingLeft: "30px" }}>
          {dataProduct?.policiesXProducts?.map((item) => (
            <li className="itemPolitica" key={item.id}>
              {item?.policy?.policyType?.name} - {item?.policy?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DetallesProducto;
