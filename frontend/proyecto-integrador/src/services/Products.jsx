import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getProducts = async ({setProducts}) => {
    const resp = await api.get('/products');
    setProducts(resp.data);
  }

// funcion para obtener los detalles de un solo producto por su id
export const getProductDetail = async ({setDataProduct, id, setDataCategory, setDataCity}) => {
  const resp = await api.get(`/products/${id}`);
  setDataProduct(resp.data)
  setDataCategory(resp.data.category)
  setDataCity(resp.data.city)
}