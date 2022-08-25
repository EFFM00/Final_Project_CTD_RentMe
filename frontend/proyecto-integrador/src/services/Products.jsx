import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getProducts = async ({setProducts}) => {
    const resp = await api.get('/products');
    setProducts(resp.data);
  }


// export const getProduct = async (Id) => {
//     const resp = await api.get(`/product-characteristics/${Id}`);
//     return resp.data
//   }



export const getProductById = async (productId) => {
  const resp = await api.get(`/products/${productId}`);

  const lista= resp.data;

  //TODO: Quitar se agrega esto mientras lo arreglan en el back
  lista.characteristics=caracteristicas

  return lista;
}




const caracteristicas = [
  {
      id: 1,
      descripcion: "Cocina"
  },
  {
      id: 2,
      descripcion: "Televisor"
  },
  {
      id: 3,
      descripcion: "Aire acondicionado"
  },
  {
      id: 4,
      descripcion: "Apto mascotas"
  },
  {
      id: 5,
      descripcion: "Estacionamiento gratuito"
  },
  {
      id: 6,
      descripcion: "Pileta"
  },
  {
      id: 7,
      descripcion: "Wifi"
  },
]