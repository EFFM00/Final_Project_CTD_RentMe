import styled from "styled-components";

// export const Section = styled.section`
//     background-color: rgba(56, 59, 88, 0.1);

//     @media screen and (min-width: 1024px) {
//         display: flex;
//         justify-content: center;
//     }
// `

export const ReservaStyle = styled.div`
    padding-top: 90px;
    padding-bottom: 100px;

    // @media screen and (min-width: 1024px) {
    //     display: flex;
    //     justify-content: center;
    // }
`

export const Header = styled.div`
    background-color: ${({ theme }) => theme.tertiary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media screen and (min-width: 768px) {
        padding: 10px 30px;
    }
`

export const DatosReserva = styled.div`
    background-color: rgba(56, 59, 88, 0.1);
    padding: 50px 10px;

    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 850px 450px;
        gap: 40px;
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
    grid-template-columns:1fr 1fr;
    gap: 20px;
    width:100%;

    @media screen and (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`
export const Formurario = styled.input`
background-color:#DFE4EA;
opacity: 0.4;
border: 1px solid #ffffff;
border-radius: 5px;
outline:none;
width:100%;
height:40px;
margin-top:5px;
padding-left:15px;
`
export const Formurario2 = styled.input`
background-color:#FFFFFF;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
opacity: 0.4;
border: 1px solid #ffffff;
border-radius: 5px;
outline:none;
width:100%;
height:40px;
margin-top:5px;
padding-left:15px;
`


export const Horario = styled.div`
    /* border: 1px solid black; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    /* margin-top:-30px; */
    width:95%;
    background-color: ${({ theme }) => theme.fondo};
    padding: 15px;
    margin-bottom: 30px;
`
export const FormularioHorario = styled.input`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    outline:none;
    border: 1px solid #ffffff;
    height:30px;
    margin-top:10px;
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

export const Politicas = styled.div`
    margin-top: 30px;
`

export const TituloPoliticas = styled.div`
    padding: 20px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.primary};

    @media screen and (min-width: 768px) {
        padding: 20px 30px;
    }  
`