import styled from "styled-components";

export const ContenedorCard = styled.article`
    // border: 1px solid black;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    background-color: ${({ theme }) => theme.white};

    border: 1px solid #DFE4EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const Imagen = styled.img`
    width: 100%;
    height: 240px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
