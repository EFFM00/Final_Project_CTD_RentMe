// Esta es la hoja de Crear cuenta

import React, { useState } from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../services/User"
import { api } from "../../services/api/api";


function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik ({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      passwordr: "",
      passwordrd: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Requerido"),
      lastName: Yup.string().required("Campo Requerido"),
      email: Yup.string().email("Ingresar email valido").required("Campo Requerido"),
      passwordr: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo Obligatorio")
      .matches(
        /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
      ),
      passwordrd: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo Obligatorio")
      .oneOf([Yup.ref('passwordr'), null], "La constraseña no coincide")
      .matches(
        /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
      )
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values){
      handleRegistration(values);
      navigate("/sign-in");
    }
  });

  const handleRegistration = async (values) => {
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }

      let resp = await api.post("/auth/register", config)
      let json = await resp.json()

      console.log(json)
    } catch {

    }
  };

  return (
    <section className="formurarios" >
      <div style={{ padding: "100px 10px" }}>
        <div className="titulo">
          <Text type="h1" color="primary" text="Crear cuenta" />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="nombre">
            <div>
              <div className="label">
              <Text type="p2" color="secondary" text="Nombre" />

              </div>
              <div className="relative">
                <input
                  type="text"
                  name='name'
                  onChange={formik.handleChange}
                  value={formik.values.name}  
                />
                { formik.errors.name && <p className="msg-error">{formik.errors.name}</p>}
              </div>
            </div>
            <div>
              <div className="label">
              <Text type="p2" color="secondary" text="Apellido" />

              </div>
              <div className="relative">
                <input
                  type="text"
                  name='lastName'
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                { formik.errors.lastName && <p className="msg-error">{formik.errors.lastName}</p>}
              </div>
            </div>
          </div>

          <div>
            <div className="label">
            <Text type="p2" color="secondary" text="Correo electrónico" />

            </div>
            <div>
              <input
                type="email"
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              { formik.errors.email && <p className="msg-error">{formik.errors.email}</p>}
            </div>
          </div>
          <div className="password">
            <div className="label">
            <Text type="p2" color="secondary" text="Contraseña" />

            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name='passwordr'
                onChange={formik.handleChange}
                value={formik.values.passwordr}
              />
              { formik.errors.passwordr && <p className="msg-error">{formik.errors.passwordr}</p>}
              {
                showPassword === false ?
                <VisibilityOffIcon className="visibility" onClick={() => {setShowPassword(!showPassword)} }/> : 
                <VisibilityIcon className="visibility" onClick={() => {setShowPassword(!showPassword)} }/>
              }
            </div>
          </div>
          <div>
            <div className="label">
            <Text type="p2" color="secondary" text="Confirmar contraseña" />

            </div>
            <div>
              <input
                type="password"
                name='passwordrd'
                onChange={formik.handleChange}
                value={formik.values.passwordrd}
              />
              { formik.errors.passwordrd && <p className="msg-error">{formik.errors.passwordrd}</p>}
            </div>
          </div>

          <div className="boton">
            <Button
              text="Crear cuenta"
              width="s"
              type="submit"
            />
          </div>
        </form>
        
        <div className="texto-cuenta">
        <p>¿Ya tienes una cuenta? <Link to={'/sign-in'}>Iniciar sesión</Link></p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
