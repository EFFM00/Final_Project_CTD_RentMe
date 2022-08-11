// Esta es la hoja de iniciar sesión

import React from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import  Icon  from "../../assets/icon-visibility.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Form.css";

function SignIn() {
  const navigate = useNavigate();
  return (
    <section className="formurarios">
      <div style={{ padding: "100px 10px" }}>
        <div className="titulo">
          <Text type="h1" color="primary" text="Iniciar sesión" />
        </div>
        <form>
          <div>
            <div className="label">
            <Text type="p2" color="secondary" text="Correo electrónico" />
            </div>
            <div>
              <input type="email" />
              <p className="msg-error">Este campo es obligatorio</p>
            </div>
          </div>
          <div className="password">
            <div className="label"> 
            <Text type="p2" color="secondary" text="Contraseña" />
            </div>
            <div>
              <input type="password" />
              <img className="visibility" src={ Icon} alt="icono" />
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
