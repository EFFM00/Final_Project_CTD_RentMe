import styled from "styled-components";

export const Section = styled.section`
    background-color: rgba(56, 59, 88, 0.1);

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
    }
`

export const PaginaReserva = styled.div`
    padding: 110px 10px 30px;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 900px 450px;
        gap: 40px;
        padding: 110px 30px 30px;
    }
`

export const FormularioDatos = styled.form`
    border: 1px solid black;
    
    background-color: ${({ theme }) => theme.fondo};
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`

export const Horario = styled.div`
    border: 1px solid black;

    background-color: ${({ theme }) => theme.fondo};
    padding: 15px;
    margin-bottom: 30px;
`

export const DetalleReserva = styled.div`
    border: 1px solid black;

    background-color: ${({ theme }) => theme.fondo};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;

    @media screen and (min-width: 768px) {
        padding: 20px;
    }

    @media screen and (min-width: 1024px) {
        display: block;
        grid-row: 2 / 6;
        grid-column: 2 / 3;
    }
`

export const Titulo = styled.div`
    @media screen and (min-width: 768px) {
        grid-column: 1 / 3;
    }
`

export const CajaImagen = styled.div`
    @media screen and (min-width: 768px) {
        grid-row: 2 / 4;
    }   
`

export const Imagen = styled.img`
    width: 100%;
    height: 240px;
`