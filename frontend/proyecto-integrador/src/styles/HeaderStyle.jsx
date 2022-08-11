import styled from "styled-components";

export const Contenedor = styled.div`
    background-color: ${({ theme }) => theme.fondo};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 0 15px;
    position: fixed;
    width: 100%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.5);
    color: ${({ theme }) => theme.titulos};
    font-weight: bold;
    z-index: 9;

    @media screen and (min-width: 768px) {
        padding: 0 30px;
    }
`

export const IconoMenu = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

