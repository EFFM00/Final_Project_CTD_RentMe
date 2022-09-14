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
    margin-left:70px;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 900px 450px;
        gap: 40px;
        padding: 110px 30px 30px;
    }
`
export const FormularioDatos = styled.form`
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: ${({ theme }) => theme.fondo};
    padding: 10px;
    margin-bottom: 30px;
    /* margin-top:-30px; */
    width:100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`
export const Formurario = styled.input`
background-color:#DFE4EA;
opacity: 0.4;
border-radius: 5px;
outline:none;
width:388px;
height:40px;
`

export const Horario = styled.div`
    /* border: 1px solid black; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    /* margin-top:-30px; */
    width:100%;
    background-color: ${({ theme }) => theme.fondo};
    padding: 15px;
    margin-bottom: 30px;
`

export const DetalleReserva = styled.div`
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin-left: -30px;
    margin-right: 10px;
    width: 400px;
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