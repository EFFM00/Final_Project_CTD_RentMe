import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getCategories = async ({setCategorias}) => {
    const resp = await api.get('/categories');
    setCategorias(resp.data);
  }

  export const getCategoriesCrearProducto = async ({setCategories}) => {
    const resp = await api.get('/categories');
    setCategories(resp.data);
  }