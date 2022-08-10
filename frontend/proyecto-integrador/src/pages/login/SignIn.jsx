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
            <Text type="p2" color="secondary" text="Correo electrónico" />
            <div>
              <input type="email" />
            </div>
          </div>
          <div className="password">
            <Text type="p2" color="secondary" text="Contraseña" />
            <div>
              <input type="password" />
              <img className="visibility" src={ Icon} alt="icono" />
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
