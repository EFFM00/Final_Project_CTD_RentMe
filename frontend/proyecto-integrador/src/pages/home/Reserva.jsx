import React from 'react'
import CalendarioReservas from '../../components/molecules/CalendarioReservas'
import { CajaImagen, DetalleReserva, FormularioDatos, Horario, Imagen, PaginaReserva, Section, Titulo } from '../../styles/ReservaStyle'
import Text from '../../components/atoms/Text'
import Button from '../../components/atoms/Button'

export default function Reserva({ mainPictureUrl, category, title, address }) {
  return (
    <Section>
    <PaginaReserva>
        <Text style={{gridColumn: "1 / 3"}} type="h1" color='secondary' text="Completá tus datos"/>
        <FormularioDatos>
            <input/>
            <input/>
            <input/>
            <input/>
        </FormularioDatos>

        <div>
            <CalendarioReservas/>
        </div>

        <Text type="h1" color='secondary' text="Tu horario de llegada"/>
        <Horario>
            <Text type="h4" color='secondary' text="Tu habitación va estar lista para el check-in entre las 10:00 AM y las 11:00 PM"/>
            <input/>
        </Horario>


        <DetalleReserva>
            <Titulo>
                <Text type="h1" color='secondary' text="Detalle de la reserva"/>
            </Titulo>
            <CajaImagen>
                <Imagen src={mainPictureUrl} alt={title}/>
            </CajaImagen>
            <div>
                <Text type="h2" color='tertiary' text={category}/>
                <Text type="h1" color='secondary' text={title}/>
                <Text type="p1" color='secondary' text={address}/>
            </div>
            <Button text="Confirmar reserva"  fullwidth />
        </DetalleReserva>
    </PaginaReserva>
    </Section>
  )
}
