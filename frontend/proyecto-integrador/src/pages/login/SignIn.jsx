import React, { useEffect, useState } from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../../services/api/api";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik ({
      initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Ingresar email valido").required("Campo Requerido"),
      password: Yup.string()
      .required("Campo Obligatorio")
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values){
      handleLogin(values);
    }
  });


  const handleLogin = (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    }

    api.post("/auth/login", JSON.stringify (userData),
    {
      headers: {'Content-Type': 'application/json'}
    })
    .then(resp => {
      console.log(resp)
      localStorage.setItem('token', resp.data.respuesta.token)
      localStorage.getItem('token')

      if(resp.status === 200) {
        navigate("/");
      }
    })
    .catch(error => {
      alert("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde")
    })
  }

  useEffect(() => {

  }, [])

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
                onChange={formik.handleChange}
              />
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
                onChange={formik.handleChange}
              />
              {
                showPassword === false ?
                <VisibilityOffIcon className="visibility" onClick={() => {setShowPassword(!showPassword)} }/> : 
                <VisibilityIcon className="visibility" onClick={() => {setShowPassword(!showPassword)} }/>
              }
            </div>
          </div>
        
          <div className="boton">
            <Button text="Ingresar" width="s"/>
          </div>
        
        </form>

        <p className="texto-cuenta">¿Aún no tenes cuenta? <Link to={"/sign-up"}>Registrate</Link> </p>
      </div>
    </section>
  );
}

export default SignIn;
