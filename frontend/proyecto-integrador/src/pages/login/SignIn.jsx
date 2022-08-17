// Esta es la hoja de iniciar sesión

import React, { useState } from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Form.css";

function SignIn({ user, setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [ usuario, setUsuario ] = useState({ email: "", passwordr: ""})
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(usuario.email === user.email && usuario.passwordr === user.passwordr) {
      setUser(usuario)
      navigate("/");
    }
  }

  return (
    
    <section className="formurarios">
      <div style={{ padding: "100px 10px" }}>
        <div className="titulo">
          <Text type="h1" color="primary" text="Iniciar sesión" />
        </div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <div className="label">
            <Text type="p2" color="secondary" text="Correo electrónico" />
            </div>
            <div>
              <input
                type="email"
                name='email'
                onChange={(e) => setUsuario({...usuario, email: e.target.value})}
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
                name='passwordr'
                onChange={(e) => setUsuario({...usuario, passwordr: e.target.value})}
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
