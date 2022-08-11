// Esta es la hoja de iniciar sesión

import React, { useState } from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import  Icon  from "../../assets/icon-visibility.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn({ setIsLogged }) {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Ingresa un e-mail valido").required("Campo Requerido"),
      password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo Requerido")
      .matches(
        /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
      )
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      setIsLogged(true);
      navigate("/");
    }
  })

  const navigate = useNavigate();
  return (
    <section className="formurarios">
      <div style={{ padding: "100px 10px" }}>
        <div className="titulo">
          <Text type="h1" color="primary" text="Iniciar sesión" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="label">
            <Text type="p2" color="secondary" text="Correo electrónico" />
            </div>
            <div>
              <input
                type="email"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <p className="msg-error">Este campo es obligatorio</p>
            </div>
          </div>
          <div className="password">
            <div className="label"> 
            <Text type="p2" color="secondary" text="Contraseña" />
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {
                showPassword === false ?
                <VisibilityOffIcon className="visibility" onClick={() => {setShowPassword(!showPassword)} }/> : 
                <VisibilityIcon className="visibility" onClick={() => {setShowPassword(!showPassword)} }/>
              }
              {/* <img className="visibility" src={ Icon} alt="icono" /> */}
              <p className="msg-error">Este campo es obligatorio</p>
            </div>
          </div>
        </form>

        <div className="boton">
          <Button text="Ingresar" width="s" click={() => navigate("/")} />
          
        </div>
        <p className="texto-cuenta">¿Aún no tenes cuenta? <Link to={"/sign-up"}>Registrate</Link> </p>
      </div>
    </section>
  );
}

export default SignIn;
