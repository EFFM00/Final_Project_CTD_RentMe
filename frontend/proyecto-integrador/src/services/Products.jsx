import { api } from "./api/api";

// funcion para obtener o listar datos de la api
export const getProducts = async ({setProducts}) => {
<<<<<<< HEAD
    const resp = await api.get('/product-characteristics');
    setProducts(resp.data);
}

  //función para obtener productos según categoría
=======
    const resp = await api.get('/products');
    setProducts(resp.data);
  }
>>>>>>> development
