import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getProducts = async ({setProducts}) => {
    const resp = await api.get('/categories');
    setProducts(resp.data);
}

  //función para obtener productos según categoría