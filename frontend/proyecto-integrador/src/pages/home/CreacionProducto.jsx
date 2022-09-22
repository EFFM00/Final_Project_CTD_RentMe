import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    // FormularioDatos,
    // Formurario,
    ReservaStyle,
} from "../../styles/ReservaStyle";
import { Formurario,TituloCP,ArrowHeader, ContenedorFormurarios, BloqueFormurario, FormurariosCP, BotonFormurario } from "../../styles/CreacionProductoStyle.jsx";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import Arrow from "../../assets/arrow.svg";
import { getCategories } from "../../services/Categories";
import { getCities } from "../../services/Cities";
import { getCharacteristics } from "../../services/Characteristics";
import { getPoliciesType } from "../../services/Policies";
import { useFormik } from "formik";
import { api } from "../../services/api/api";
import CustomSelect from "../../components/molecules/CustomSelect";

export function CreacionProducto() {
  const [categorias, setCategorias] = useState([]);
  const [cities, setCities] = useState([]);
  const [policiesTypes, setPoliciesTypes] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      getPoliciesType({ setPoliciesTypes });
    } catch (error) {
      console.error(error);
    }
  }, []);

//   console.log("policies", policiesTypes);

  useEffect(() => {
    try {
      getCities({ setCities });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getCharacteristics({ setCharacteristics });
  }, []);

  // console.log(characteristics, "Characteristics");

  useEffect(() => {
    getCategories({ setCategorias });
  }, []);

  const optionsCharacteristics = characteristics.map((character) => ({
    label: character.description,
    value: character.id,
  }));

  const optionsCategories = categorias.map((categorie) => ({
    label: categorie.title,
    value: categorie.id,
  }));

  const optionsCity = cities.map((city) => ({
    label: city.name,
    value: city.id,
  }));

  const optionsPoliciesType = policiesTypes.map((politics) => ({
    label: politics.description,
    value: politics.id,
  }));

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mainPictureUrl: "",
      address: "",
      longitude: 0.4,
      latitude: 0.6,
      price: 43.6,
      category: -1,
      city: -1,
    },
    onSubmit(values) {
    //   console.log(values, "value");
      handleCrearProducto(values);
    },
  });

  const handleCrearProducto = async (values) => {
    const productData = {
      title: values.title,
      description: values.description,
      mainPictureUrl: values.mainPictureUrl,
      address: values.address,
      longitude: 0.4,
      latitude: 0.6,
      price: 43.6,
      category: { id: values.category },
      city: { id: values.city },
    };

    try {
      const resp = await api.post("/products/add", JSON.stringify(productData), {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const idProducto = resp?.data?.id

      console.log(resp, "producto creado");
      console.log(idProducto)
      formik2.setFieldValue("product", idProducto)
      formik3.setFieldValue("product", idProducto)
      formik4.setFieldValue("product", idProducto)
    } catch (error) {}
  };

  const formik2 = useFormik({
    initialValues: {
        characteristic: -1,
        product: -1
    },
    onSubmit(values) {
      handleAgregarCaracteristicas(values)
    },
  });

  const handleAgregarCaracteristicas = async (values) => {
    const caracteristicasData = {
        characteristic: {id: values.characteristic},
        product: {id: values.product}
    }

    try {
        const resp = await api.post("/product-characteristics/add", JSON.stringify(caracteristicasData),
        {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
        })

        console.log(resp, "caract agregada");
    } catch (error) {

    }
  }

  const formik3 = useFormik({
    initialValues: {
        title: "",
        url: "",
        product: -1
    },
    onSubmit(values) {
      console.log(values, "value");
      handleAgregarImagenes(values)
    },
  });

  const handleAgregarImagenes = async (values) => {
    const imagenData = {
        title: values.title,
        url: values.url,
        product: {id: values.product}
    }

    try {
        const resp = await api.post("/images/add", JSON.stringify(imagenData),
        {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
        })

        console.log(resp, "imagen agregada");
    } catch (error) {

    }
  }

  const formik4 = useFormik({
    initialValues: {
        policy: -1,
        product: -1
    },
    onSubmit(values) {
      console.log(values, "value");
      handleAgregarPolitica(values)
    },
  });

  const handleAgregarPolitica = async (values) => {
    const politicasData = {
        policy: {id: values.policy},
        product: {id: values.product}
    }

    try {
        const resp = await api.post("/product-polices/add", JSON.stringify(politicasData),
        {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
        })

        console.log(resp, "politica agregada");
    } catch (error) {

    }
  }

  return (
    <>
      <ReservaStyle>
        <Text type="h1" color="secondary" text="Administración de productos" />

        <div>
          <Text type="h2" color="secondary" text="Crear producto" />
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label>
                <Text type="p1" color="secondary" text="Nombre del producto" />
              </label>
              <Formurario
                type={"text"}
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>

            <div>
              <label>
                <Text type="p1" color="secondary" text="Descripción" />
              </label>
              <Formurario
                type={"textarea"}
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>

            <div>
              <label>
                <Text type="p1" color="secondary" text="Url imagen principal" />
              </label>
              <Formurario
                type={"text"}
                name="mainPictureUrl"
                onChange={formik.handleChange}
                value={formik.values.mainPictureUrl}
              />
            </div>

            <div>
              <label>
                <Text type="p1" color="secondary" text="Dirección" />
              </label>
              <Formurario
                type={"text"}
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>

            <CustomSelect
              options={optionsCategories}
              placeholder="Seleccione una categoría"
              value={formik.values.category}
              onChange={(value) => formik.setFieldValue("category", value.value)}
            />
            <label>{formik.values.category}</label>
            <CustomSelect
              options={optionsCity}
              placeholder="Seleccione una ciudad"
              value={formik.values.city}
              onChange={(value) => formik.setFieldValue("city", value.value)}
            />
            <label>{formik.values.city}</label>
            <Button text="Crear producto" fullwidth type="submit" />
          </form>
        </div>

        <div>
          <Text type="h2" color="secondary" text="Agregar características" />
          <form onSubmit={formik2.handleSubmit}>
          <CustomSelect
              options={optionsCharacteristics}
              placeholder="Seleccione las características"
              value={formik2.values.characteristic}
              onChange={(value) => formik2.setFieldValue("characteristic", value.value)}
            />
            <Button text="Agregar características" fullwidth type="submit"/>
          </form>
        </div>

        <div>
          <Text type="h2" color="secondary" text="Agregar imágenes" />
          <form onSubmit={formik3.handleSubmit}>
            <label>
              <Text type="p1" color="secondary" text="Titulo imagen" />
            </label>
            <Formurario
                type={"text"}
                name="title"
                onChange={formik3.handleChange}
                value={formik3.values.title} />
            <label>
              <Text type="p1" color="secondary" text="Url imagen" />
            </label>
            <Formurario
                type={"text"}
                name="url"
                onChange={formik3.handleChange}
                value={formik3.values.url}
                />
            <Button text="Agregar imagen" fullwidth type="submit"/>
          </form>
        </div>

        <div>
          <Text type="h2" color="secondary" text="Agregar políticas" />
          <form onSubmit={formik4.handleSubmit}>
            <CustomSelect
              options={optionsPoliciesType}
              placeholder="Seleccione el tipo de política"
              value={formik4.values.policy}
              onChange={(value) => formik4.setFieldValue("policy", value.value)}
            />
            <Button text="Agregar política" fullwidth type="submit" />
          </form>
        </div>
      </ReservaStyle>
    </>
  );
}
