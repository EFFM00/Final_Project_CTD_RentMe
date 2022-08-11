import styled from "styled-components";

export const ContenedorCategorias = styled.div`
    padding: 30px 15px 20px;

    @media screen and (min-width: 768px) {
        padding: 30px 30px 20px;
    }
`

export const GridCategorias = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    padding: 10px 0;
`

export const ContenedorBooking = styled.div`
    background-color: ${({ theme }) => theme.tertiary};
    padding: 30px 15px 20px;

    @media screen and (min-width: 768px) {
        padding: 30px 30px 20px;
        background-color: rgba(56, 59, 88, 0.1);
    }
`

export const GridBooking = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
    gap: 10px;
`

