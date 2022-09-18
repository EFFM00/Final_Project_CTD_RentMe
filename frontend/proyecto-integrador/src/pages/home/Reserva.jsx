import React, { useContext, useEffect } from 'react'
import CalendarioReservas from '../../components/molecules/CalendarioReservas'
import { CajaImagen, DetalleReserva, FormularioDatos, Formurario, Formurario2, Horario, FormularioHorario, Imagen, Titulo, DatosReserva, ReservaStyle, Header, Politicas, TituloPoliticas } from '../../styles/ReservaStyle'
import Text from '../../components/atoms/Text'
import Button from '../../components/atoms/Button'
import { Link, useParams } from 'react-router-dom'
import Arrow from "../../assets/arrow.svg";
import { getProductById } from '../../services/Products'
import { UserContext } from '../../services/UserContext'

export default function Reserva() {
    const { id } = useParams();
    const { dataProduct, setDataProduct } = useContext(UserContext)

    const getData = async () => {
        const resp = await getProductById(id);
        setDataProduct(resp);
        console.log(resp, "reserva")
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

  return (
    <ReservaStyle>
        <Header>
        <div>
            <Text
                type="h4"
                color="white"
                text={dataProduct?.category?.title}
            />
            <Text type="h1" color="white" text={dataProduct.title}/>
        </div>
        <div>
            <Link to={`/products/${id}`}>
                <img style={{width: "30px"}} src={Arrow} alt="arrow" />
            </Link>
        </div>
        </Header>
    <DatosReserva>
        <Text style={{gridColumn: "1 / 3"}} type="h1" color='secondary' text="Completá tus datos"/>
        <FormularioDatos>
            <div>
            <label>
            <Text type="p1" color='secondary' text="Nombre"/>
            </label>
            <Formurario type={"text"}/>
            </div>

            <div>
            <label>
            <Text type="p1" color='secondary' text="Apellido"/>
            </label>
            <Formurario type={"text"}/>
            </div>

            <div>
            <label>
            <Text type="p1" color='secondary' text="Correo electronico"/>
            </label>
            <Formurario type={"email"}/>
            </div>
            
            <div>
            <label>
            <Text type="p1" color='secondary' text="Ciudad"/>
            </label>
            <Formurario2 type={"text"}/>   
            </div>
            
        </FormularioDatos>

        {/* <div>
            <CalendarioReservas/>
        </div> */}

        <Text type="h1" color='secondary' text="Tu horario de llegada"/>
        <Horario>
            <Text type="h4" color='secondary' text="Tu habitación va estar lista para el check-in entre las 10:00 AM y las 11:00 PM"/><br />
           <div>
           <label htmlFor="">Indicá tu horario estimado de llegada</label><br />
            <FormularioHorario type={"time"}/>
           </div>
        </Horario>


        <DetalleReserva>
            <Titulo>
                <Text type="h1" color='secondary' text="Detalle de la reserva"/>
            </Titulo>
            <CajaImagen>
                <Imagen src={dataProduct.mainPictureUrl} alt="{dataProduct.title}"/>
            </CajaImagen>
            <div>
                <Text type="h2" color='secondary' text={dataProduct?.category?.title}/>
                <Text type="h1" color='secondary' text={dataProduct.title}/>
                <Text type="p1" color='secondary' text={`${dataProduct?.city?.name}, ${dataProduct?.city?.country?.name}`}/>
            </div>
            <Button text="Confirmar reserva"  fullwidth />
        </DetalleReserva>
    </DatosReserva>

    <Politicas>
        <TituloPoliticas>
            <Text type="h1" color="secondary" text="Qué tenes que saber" />
        </TituloPoliticas>
        <div>
            <div>
                <Text
                type="h3"
                color="secondary"
                text="Normas de la casa"
                />
                <ul style={{ paddingLeft: "30px" }}>
                    {dataProduct?.policiesXProducts
                        ?.filter(
                            (item) =>
                                item?.policy?.policyType?.name ===
                                "Normas de la casa"
                            )
                        .map((item) => (
                            <li key={item.id}>
                                {item?.policy?.description}
                            </li>
                        ))}
                </ul>
            </div>
            <div>
                <Text
                type="h3"
                color="secondary"
                text="Política de cancelación"
                />
                <ul style={{ paddingLeft: "30px" }}>
                    {dataProduct?.policiesXProducts
                        ?.filter(
                            (item) =>
                                item?.policy?.policyType?.name ===
                                "Política de cancelación"
                        )
                        .map((item) => (
                            <li key={item.id}>
                                {item?.policy?.description}
                            </li>
                    ))}
                </ul>
            </div>
            <div>
                <Text
                type="h3"
                color="secondary"
                text="Salud y seguridad"
                />
                <ul style={{ paddingLeft: "30px" }}>
                    {dataProduct?.policiesXProducts
                        ?.filter(
                            (item) =>
                                item?.policy?.policyType?.name ===
                                "Salud y seguridad"
                            )
                        .map((item) => (
                            <li key={item.id}>
                                {item?.policy?.description}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </Politicas>

    </ReservaStyle>
  )
}
