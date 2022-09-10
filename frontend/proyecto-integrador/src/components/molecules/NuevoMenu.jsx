import React, { useContext, useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Avatar from "../atoms/Avatar";
import { AvatarUser, BotonesIC, ContenedorMenu, Titulo } from '../../styles/NuevoMenuStyle';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../services/UserContext";

function NuevoMenu({showBtnRegister = true , setShowBtnRegister, showBtnSignIn, setShowBtnSignIn}) {
    const [ tablet, setTablet ] = useState(false);
    const {user} = useContext(UserContext);
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
                {
                    user === null ?
                    <Text type="h2" color="white" text="MENÚ" />
                    : <Avatar name="Bruno Diaz" initials="BD"/>
                }  
            </Titulo>
        }

        {
            user === null ?
            <BotonesIC>
            {
                showBtnRegister ?
                <div>            
                {
                    tablet ? <Button
                    text="Crear cuenta"
                    type="Outline"
                    width="xs"
                    click={() => {
                        navigate("/sign-up")
                        setShowBtnRegister(false);
                        setShowBtnSignIn(true);
                    }}
                    />
                    : <Button
                    text="Crear cuenta"
                    type="text"
                    fullwidth
                    click={() => {
                        navigate("/sign-up")
                        setShowBtnRegister(false);
                        setShowBtnSignIn(true);
                    }}
                    />
                }
                </div> : null 
            }

            {
                showBtnRegister && showBtnSignIn ?
                <div>
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
                </div> : null
            }
            
            {
                showBtnSignIn ?
                <div>
                {
                    tablet ? <Button
                    text="Iniciar sesión"
                    type="Outline"
                    width="xs"
                    click={() => {
                        navigate("/sign-in")
                        setShowBtnSignIn(false);
                        setShowBtnRegister(true);
                    }}
                    />
                    : <Button
                    text="Iniciar sesión" 
                    type="text"
                    fullwidth
                    click={() => {
                        navigate("/sign-in")
                        setShowBtnSignIn(false);
                        setShowBtnRegister(true);
                    }}
                    />
                }
                </div> : null
            }
            </BotonesIC> :
            <AvatarUser>
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
            </AvatarUser>
        }
    </ContenedorMenu>
  )
}

export default NuevoMenu