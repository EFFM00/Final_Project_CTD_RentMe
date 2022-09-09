import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Avatar from "../atoms/Avatar";
import { AvatarUser, BotonesIC, CloseIconStyle, ContenedorMenu, Titulo } from '../../styles/NuevoMenuStyle';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';

function NuevoMenu() {
    const [ tablet, setTablet ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const responsive = () => window.innerWidth >= 768 ? setTablet(true) : setTablet(false)
        responsive();
        window.addEventListener("resize", ()=>responsive())
    }, [])

  return (
    <ContenedorMenu>
        
        {
            tablet ? null
            : <Titulo>
            <Text type="h2" color="white" text="MENÚ" />
                {/* <Avatar name="Bruno Diaz" initials="BD"/> */}
            </Titulo>
        }

        <BotonesIC>
            {
                tablet ? <Button
                text="Crear cuenta"
                type="Outline"
                width="xs"
                click={() => {
                    navigate("/sign-up")
                }}
                />
                : <Button
                text="Crear cuenta"
                type="text"
                fullwidth
                click={() => {
                    navigate("/sign-up")
                }}
              />
            }

            {
                tablet ? null
                : <hr
                style={{
                height: "1px",
                width: "95%",
                backgroundColor: "#545776",
                margin: "auto",
                }}
                />
            }
            
            {
                tablet ? <Button
                text="Iniciar sesión"
                type="Outline"
                width="xs"
                click={() => {
                    navigate("/sign-in")
                }}
                />
                : <Button
                text="Iniciar sesión" 
                type="text"
                fullwidth
                click={() => {
                    navigate("/sign-in")
                }}
                />
            }
        </BotonesIC>

        {/* <AvatarUser>
            {
                tablet ? <Avatar name="Bruno Diaz" initials="BD"/>
                : null
            }
            
            {
                tablet ? <Button
                text="Cerrar sesión"
                type="Outline"
                width="xs"
                />
                : <Button
                text="Cerrar sesión" 
                type="text"
                fullwidth
                /> 
            }            
        </AvatarUser> */}
    </ContenedorMenu>
  )
}

export default NuevoMenu