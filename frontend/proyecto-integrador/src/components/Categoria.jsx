import React from "react";
import Text from "./atoms/Text";
import { ContenedorCtg, Imagen } from "../styles/CategoriaStyle";

function Categoria({ image_url, title, description }) {
  return (
    <ContenedorCtg>
      <div>
        <Imagen src={image_url} alt={title} />
      </div>
      <div>
        <Text type="h2" color="secondary" text={title} />
        <Text type="h4" color="secondary" text={description} />
      </div>
    </ContenedorCtg>
  );
}

export default Categoria;
