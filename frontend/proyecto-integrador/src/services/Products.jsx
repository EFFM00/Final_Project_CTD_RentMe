import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getProducts = async ({setProducts}) => {
    const resp = await api.get('/products');
    setProducts(resp.data);
  }



export const getProductById = async (productId) => {
  const resp = await api.get(`/products/${productId}`);
  return resp.data
}