// Esta es la hoja de Crear cuenta

import React from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import  Icon  from "../../assets/icon-visibility.svg";
import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  return (
    <section className="formurarios">
      <div style={{ padding: "100px 10px" }}>
        <div className="titulo">
          <Text type="h1" color="primary" text="Crear cuenta" />
        </div>

        <form>
          <div className="nombre">
            <div>
              <Text type="p2" color="secondary" text="Nombre" />
              <div className="relative">
                <input type="text" name="" id="" />
              </div>
            </div>
            <div>
              <Text type="p2" color="secondary" text="Apellido" />
              <div className="relative">
                <input type="text" />
              </div>
            </div>
          </div>

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
          <div>
            <Text type="p2" color="secondary" text="Confirmar contraseña" />
            <div>
              <input type="password" />
            </div>
          </div>
        </form>
        <div className="boton">
          <Button
            text="Crear cuenta"
            width="s"
            click={() => navigate("/sign-in")}
          />
        </div>
        <div className="texto-cuenta">
        <p>¿Ya tienes una cuenta? <Link to={'/sign-in'}>Iniciar sesión</Link></p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
